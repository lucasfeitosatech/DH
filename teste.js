//Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
//Pipoca – 10 segundos (padrão); tempo máximo = 20
//Macarrão – 8 segundos (padrão); tempo máximo = 16
//Carne – 15 segundos (padrão);   tempo máximo = 30
//Feijão – 12 segundos (padrão);   tempo máximo = 24
//Brigadeiro – 8 segundos (padrão); tempo máximo = 16

let pipoca = 10;                     //Neste campo foram reservados os tipos de alimentos 
let macarrao = 8                     //assim como seus respectivos tempos necessários de cozimento 
let carne = 15                       //como vairáveis para serem utilizadas na minha função.
let feijao = 12
let brigadeiro = 8



function microondas(tempo,prato){          //Aqui o parâmetro prato que busca as variáveis citadas anteriormente e
                                           // o tempo que vai indicar quanto de tempo o usuário irá escolher.
if (tempo>=prato && tempo<=prato*2) {
    console.log("Prato pronto, bom apetite!!!")
}else if(tempo<prato) {
    console.log("Tempo insuficiente")              //Nesta parte utilizei operadores lógicos para montar uma fórmula única para todos os pratos
}else if(tempo>=prato*2 && tempo<prato*3) {
    console.log("O prato queimou")
}else if(tempo>=prato*3) {                         // BY GÉSSY (: //
    console.log("Kabummm")
}else{
    console.log("Prato inexistente")
}
    
}  

microondas(100, 6);