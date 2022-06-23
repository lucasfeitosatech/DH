function getCep() {
  let cep = document.getElementById("cep");
  let xhr = new XMLHttpRequest();
  // https://viacep.com.br/ws/01001000/json/
  xhr.open("GET", `https://viacep.com.br/ws/${cep.value}/json/`);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      const endereco = this.response;
      if(endereco.erro){
        const p = document.getElementById('erro').style.display = 'block';
        console.log(p);
      } else {
        const saida = `${endereco.logradouro}, ${endereco.complemento}, ${endereco.localidade}, ${endereco.bairro}, ${endereco.uf}`
        document.getElementById("endereco").value = saida;
        cep.value = '';
      }
    }
  };

  xhr.onerror = function(){
    const p = document.getElementById('erro').style.display = 'block';
    console.log(p);
  }

  xhr.send();
}
