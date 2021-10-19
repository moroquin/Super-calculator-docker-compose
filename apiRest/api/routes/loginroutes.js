
const router = require('express').Router();
const crypto = require('crypto');
const users = require('../models/Users')
const authenticated = require('../auth/chktoken');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    let existe;

    try {
        existe = await users.exists(email);
    } catch (error) {
        res.status(503).json({ success: -1 });
    }

    if (existe !== 0) {
        res.status(409).json({ success: 0 });
    }
    else {
        crypto.randomBytes(16, (err, salt) => {
            const newSalt = salt.toString('base64');
            console.log('salt: ' + newSalt);
            crypto.pbkdf2(password, newSalt, 1000, 64, 'sha1', async (err, key) => {
                const encrypetedPassword = key.toString('base64');
                try {
                    await users.setUser(email, encrypetedPassword, newSalt);
                } catch (error) {
                    res.status(503).json({ success: -1 });
                }

            });
        });
        //console.log("funciono");
        res.status(201).json({ success: 1 });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let user;
    try {
        user = await users.getUser(email);
    } catch (error) {
        res.status(503).send('temporalmente innaccesible');
    }

    if (!user) {
        res.send('Usuario o contraseña incorrecta');
    }
    else {
        crypto.pbkdf2(password, user.salt, 1000, 64, 'sha1', (err, key) => {
            const encryptedPass = key.toString('base64');
            // console.log('encpass' + encryptedPass);
            if (user.password === encryptedPass) {
                const token = authenticated.signToken(email);
                //console.log('match');
                res.status(201).json({ "token": token })
            }
            else {
                res.status(401).send('usuario y o contraseña incorrecta');
            }
        });

    }
    //console.log(user);
});





module.exports = router;