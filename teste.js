const { exec } = require("child_process");

const SEGUNDO = 1000;

const minuto = 60*SEGUNDO;

const tempo = 40*minuto;

setTimeout(() => {

  exec('cd /Users/lucasfeitosa/Desktop/ACCESS/Gitlab/veragi && git add . && git commit -m "Termino 04:00 Finalizando componente de modal de aprovação"  ', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});


},tempo)

