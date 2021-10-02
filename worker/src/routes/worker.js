const router = require('express').Router();


router.get('/' , (req , res)=>{
   // const {op1,op2} = req.body;

    console.log("hola mundo");
    res.status(201).json({hola:"hola mundo"});
    //res.send('hola mundo');
});

router.get('/suma/' , (req , res)=>{
    const {ope1,ope2} = req.query;     
    console.log('entrando a suma'+ope1+' '+ope2);
     res.status(201).json({result:(Number.parseInt(ope1)+Number.parseInt(ope2))});
 });

 router.get('/resta/' , (req , res)=>{
    const {ope1,ope2} = req.query;     
    console.log('entrando a resta'+ope1+' '+ope2);
     res.status(201).json({result:(Number.parseInt(ope1)-Number.parseInt(ope2))});
 });

 router.get('/multiplicacion/' , (req , res)=>{
    const {ope1,ope2} = req.query;     
    console.log('entrando a multiplicacion'+ope1+' '+ope2);
     res.status(201).json({result:(Number.parseInt(ope1)*Number.parseInt(ope2))});
 });

 router.get('/division/' , (req , res)=>{
    const {ope1,ope2} = req.query;     
    console.log('entrando a division'+ope1+' '+ope2);
     res.status(201).json({result:(Number.parseInt(ope1)/Number.parseInt(ope2))});
 });



module.exports  = router;