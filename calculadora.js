function resta(){
  const num = parseFloat(document.getElementById("num_uno").value);
  const num1 = parseFloat(document.getElementById("num_dos").value);
    const resultado = document.getElementById("resultado");
    const res = num - num1;
    const imprimir =
    `
    <p> Resultado: ${res} </p>
    `
    resultado.innerHTML = imprimir;
    
}

function suma(){
  const num = parseFloat(document.getElementById("num_uno").value);
  const num1 = parseFloat(document.getElementById("num_dos").value); 
    const resultado = document.getElementById("resultado");
    const sum = num + num1;
    const imprimir = 
    `
    <p> Resultado: ${sum} </p>
    `
    resultado.innerHTML = imprimir;
  
}

function multiplicacion(){
  const num = parseFloat(document.getElementById("num_uno").value);
  const num1 = parseFloat(document.getElementById("num_dos").value);
    const resultado = document.getElementById("resultado");
    const mul = num * num1;
    const imprimir = 
    `
    <p> Resultado: ${mul} </p>
    `
    resultado.innerHTML = imprimir;
}

function division(){
  const num = parseFloat(document.getElementById("num_uno").value);
  const num1 = parseFloat(document.getElementById("num_dos").value);
  const resultado = document.getElementById("resultado");
    const div = num / num1;
    const imprimir =
    `
    <p> Resultado: ${div} </p>
    `
    resultado.innerHTML = imprimir;
}
