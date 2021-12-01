let grupo = require('./grupo');
console.log(grupo.pessoas);
grupo.novaPessoa('Pessoa 6',1.90,'M');
console.log(grupo.pessoas);

const pessoa7 = new grupo.Pessoa('Pessoa 7',1.75,'F');
grupo.pessoas.push(pessoa7);
console.log(grupo.pessoas);
console.log(grupo.numeroDeHomens());

