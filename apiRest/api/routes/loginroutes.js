
const router = require('express').Router();
const crypto = require('crypto');

const keys = require('../keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();




router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    let promiseHgetAll = new Promise((resolve, reject) => {
        redisClient.exists(email, function (error, exist) {
            if (error) {
                resolve(0);
            }
            else {
                resolve(exist);
            }
        });
    });

    let existe = await promiseHgetAll;

    if (existe !== 0) {
        res.status(409).json({ success: 0 });
    }
    else {
        crypto.randomBytes(16, (err, salt) => {
            const newSalt = salt.toString('base64');
            crypto.pbkdf2(password, newSalt, 1000, 64, 'sha1', (err, key) => {
                const encrypetedPassword = key.toString('base64');
                redisClient.hset(email, 'password', encrypetedPassword,'salt',newSalt);
            });
        });
        console.log("funciono");
        res.status(201).json({ success: 1 });
    }
});

router.post('/login', (req, res) => {
    // router code here
    res.send('post funcionando lsogin');
});





module.exports = router;