/*
  Revisão Objetos 
  - O que é um objeto?
    - Representação de algo do mundo físico
  - Propriedades    
  - Metódos
  - this keyword
  - Função Construtora
*/

/* - Características do objeto em si 
    - Profile/Perfil de Usuário
      nome: 'Usuário Teste',
      apelido: 'teste123',
      biografia: 'Lorem Ipsum shudhaidsu',
      contatos -> Lista de Contatos
        Contato: 
          telefone: '11-11111-1111',
          email:'email@email.com'
      email: 'Email' */

// {} -> Objeto Vazio -> Por não possuir propriedades nem metódos
// nome_proprieade:valor_propriedade -> seperador pela vírgula
// nome_metódo seguido de () e {}
let profile = {
  nome: "Usuário Teste",
  apelido: "teste 123",
  filho: {
    nome: "Teste",
  },
  contatos: [],
  // CRUD - Create Read Update Delete
  // ReadAll
  listarContatos() {
    // this -> O objeto Pai de todo mundo no contexto do Objeto
    console.table(this.contatos);
  },
  // Create
  adicionarContato(telefoneParametro, emailParametro) {
    // telefoneParametro -> '22-22222-2222'
    // emailParametro -> 'email2@email2.com'
    const novoContato = {
      telefone: telefoneParametro,
      email: emailParametro,
    };
    //
    this.contatos.push(novoContato);
  },
  alterarNome(novoNome){
    this.nome = novoNome;
  }
};

// Chamar o metódo dentro do objeto;
profile.listarContatos();
profile.adicionarContato("22-22222-2222", "email2@email2.com");
profile.listarContatos();
profile.adicionarContato("11-11111-1111", "email@email.com");
profile.listarContatos();
profile.alterarNome('Lucas Feitosa');
console.log(profile);


// dot notation
