function recibir_numeros(){
  const num = parseFloat(document.getElementById("num_uno").value);
  const num1 = parseFloat(document.getElementById("num_dos").value);

  const numeros = {
    num,
    num1,
  }
  return numeros;
}

const resultado = document.getElementById("resultado");

function suma(){
  let {num, num1} = recibir_numeros();
  if(num && num1){
    const sum = num + num1;
    const imprimir = ` <p> Resultado: ${sum} </p> `
    resultado.innerHTML = imprimir;
  }
}

function resta(){
  const {num, num1} = recibir_numeros();
  if(num && num1){
    const res = num - num1;
    const imprimir =` <p> Resultado: ${res} </p> `
    resultado.innerHTML = imprimir;
  }
}


function multiplicacion(){
  const {num, num1} = recibir_numeros();
  if(num && num1){
    
    const mul = num * num1;
    const imprimir = ` <p> Resultado: ${mul} </p> `
    resultado.innerHTML = imprimir;
  }
}

function division(){
  const {num, num1} = recibir_numeros();
  if(num && num1){
    const div = num / num1;
    const imprimir =` <p> Resultado: ${div} </p> `
    resultado.innerHTML = imprimir;
  }
}

function borrar() {
  document.getElementById("num_uno").value = "";
  document.getElementById("num_dos").value = "";
  const imprimir =``
  resultado.innerHTML = imprimir;
}