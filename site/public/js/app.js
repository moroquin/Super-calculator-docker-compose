console.log('Iniciando app.js');



let Sumar = ()=>{
    console.log('sumando');
    modUltimaOperacion('Sumando');
};


let Restar = ()=>{
    console.log('restando');
    modUltimaOperacion('Restando');
};


let Dividir = ()=>{
    console.log('Dividiendo');
    modUltimaOperacion('Dividiendo');
};

let Multiplicar = ()=>{
    console.log('Multiplicando');
    modUltimaOperacion('Multiplicando');
};

let modUltimaOperacion = (mensaje)=>{
    const ultimaOperacion= document.getElementById('ultimaOperacion');
    ultimaOperacion.innerHTML = `  ${mensaje}`;
};


let Actualizar = ()=>{

    //axios.get('localhost:3001/api/historial')
    axios.get('http://localhost/api/historial')
    .then((response) => {
        console.log(response);
        
    })
    .catch((value) => {
        console.log(value);
    });
    

  //const historico = document.getElementById('historico');
  //historico.innerHTML="<p>Actualizando</p>";
};