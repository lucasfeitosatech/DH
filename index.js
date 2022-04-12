window.onload = function(){
  console.log(document);
  const h1 = document.getElementById('title');
  h1.innerHTML = "Texto trocado no JS";
  console.log(h1);
}


function aoClicarNoBotao(){
  const h1 = document.getElementById('title');
  const input = document.getElementById('texto');
  h1.innerHTML = `${input.value}`
}

function aoTrocarTextoDoInput(){
  const valorDoInput = event.target.value;
  if(!valorDoInput.includes("@")){
    document.getElementById('texto').style.backgroundColor = 'red';
  } else {
    document.getElementById('texto').style.backgroundColor = 'transparent';
  }
}

function aoTrocarSenha(){
  const valorDoInput = event.target.value;
  if(valorDoInput.length < 5){
    document.getElementById('senha').style.backgroundColor = 'red';
  } else {
    document.getElementById('senha').style.backgroundColor = 'transparent';
  }
}