let nomes = ["Fulano", "Ciclano", "Beltrano", "Anderson"];
let html = `
    <h1> Minha lista de nomes </h1>
    <ol>
`;

for(let i = 0; i < nomes.length; i++){
    const nome = nomes[i];
    html = html + '<li>' + nome + '</li>';
};

html = html + '</ol>';

console.log(html);