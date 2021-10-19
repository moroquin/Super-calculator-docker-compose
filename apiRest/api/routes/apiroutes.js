const express = require('express');
const router = express.Router();
router.use(express.json());

const authenticated = require('../auth/chktoken');

const axios = require('axios');

const workerhost = process.env.WORKER_HOST;
const workerport = process.env.WORKER_PORT;


router.get('/prueba', async (req, res) => {
    console.log(workerhost + ':' + workerport + '/math/');
    await axios.get('http://' + workerhost + ':' + workerport + '/math/', { port: Number.parseInt(workerport) })
        .then(response => {
            console.log(response.data);
            res.status(201).json(response.data);
        })
        .catch(error => {
            console.log("error");
            console.log(error);
            res.send("funciono");
        });

    //  console.log("funciono");
    // res.send("funciono");
});



router.get('/historial', authenticated.checkToken, (req, res) => {
    console.log('entrando a historial');
    res.status(201).json({ historial: ['1+1=2', '5*6=25'] });
});

router.post('/operacion',  authenticated.checkToken,async (req, res) => {
    const { op1, op2, ope } = req.body;
    const params = {
        ope1: op1,
        ope2: op2
    };

    console.log('http://' + workerhost + ':' + workerport + '/math/' + ope);

    await axios.get('http://' + workerhost + ':' + workerport + '/math/' + ope, { port: Number.parseInt(workerport), params })
        .then(response => {
            console.log(response.data);
            res.json({ operacion: `${op1}  ${ope}  ${op2}=${response.data.result}`, resultado: response.data.result }).status(201);
        })
        .catch(error => {

            console.log(error);
            res.send("funciono");
        });
});





module.exports = router;