// José
// da Silva
// 27
// 83.5
// 1.70
// Ouro
https://kb-hom-master1.accesstage.com.br:30443/api-planoeplano-zemo/swagger-ui/index.html?configUrl=/api-planoeplano-zemo/v3/api-docs/swagger-config

// Ctrl + /
//Alt + Shift + A
function imc(nome,sobrenome,idade,peso,altura){
  const imc = peso/altura**2;
  console.log(nome + " " + sobrenome + " tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}
imc("José","Da Silva",27,83.5,1.7)

