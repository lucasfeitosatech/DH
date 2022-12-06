/*
  Módulos 

    Internos ou Nativos -> São os módulos que já pré-instaldos com o NodeJS
      fs -> File System -> Permite a escrita/leitura de arquivos
      ...
      
    Externos ou da Comunidade 
      readline-sync -> Receber entradas via console.log
      ReactJS (Facebook) -> Criar interfaces -> Biblioteca (Library)
      AngularJS (Google) -> TypeScript -> Criar interface  
      VueJS -> Criar interfaces (Framework)
        Framework - Ecossistema de funcionalidades para desenvolvermos as aplicações
          Angular -> Cliente Http -> Serve para realizarmos chamadas em API's 
        Biblioteca
          Axios -> 
          fetch
          qualquer outro cliente

      Express -> Criar back-end e API's 

    Próprios


    Encapsular e Reaproveitar código



*/
// require -> Nos permite trazer os dados do módulo para a variável
// require -> Importação do módulo para o nosso código

// o require vai lá no arquivo de origem do modulo e busca pelo module.exports
// desestruturação -> forma dinamica de criar variáveis
const calculadora = require('../../modulos/calculadora/index');
calculadora.soma();
soma(5,6,7); // const soma = calculadura.soma
subtracao(1,2) // const subtracao = calculadura.subtracao
PI;// const PI = calculadora.PI;

const [pos0,pos1,pos3] = [1,2,3];
// const pos0 = numeros[0];
// const pos1 = numeros[1];

const {nome,idade,peso} = {
  nome:'teste',
  idade:15,
  peso:80,
}

meuObj.nome
meuObj.idade
meuObj.peso

// CommonJS Modules








