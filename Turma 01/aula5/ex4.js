// José
// da Silva
// 27
// 83.5
// 1.70
// Ouro
https://kb-hom-master1.accesstage.com.br:30443/api-planoeplano-zemo/swagger-ui/index.html?configUrl=/api-planoeplano-zemo/v3/api-docs/swagger-config

// Ctrl + /
//Alt + Shift + A
function imc(sexo,idade,peso,altura){
  const imc = peso/altura**2;
  return imc;
}
const imc = imc("Masculino",27,83.5,1.7);
console.log(imc);

