// const marca = "Fiat";
// const modelo = "Argo";
// const potencia = 102;


//JSON - JavaScript Object Notation
const carro = {
  marca:'Fiat',
  modelo:'Argo',
  potencia: 102,
  acelerar: function(){
    console.log("Acelerando...");
  }
};

function Carro(marcaP,modeloP,potenciaP){
  this.marca = marcaP
  this.modelo = modeloP
  this.potencia = potenciaP

  this.acelerar = function(){
    console.log(this.modelo + " Acelerando...");
  }
}

let argo = new Carro("Fiat","Argo",103);
argo.acelerar();

let uno = new Carro("Fiat","Uno",70);
uno.acelerar();

const carros = [argo,uno];

for(let i = 0;i<carros.length;i++){
  console.log(carros[i]);
}


for(let i in carros){
  console.log(carros[i]);
}

for(let carro of carros){
  console.log(carro);
}




