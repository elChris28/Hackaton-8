 //EJERCCIO 1
 
 function sum ()
 {
    const number1 = Number(document.getElementById("ex1-number1").value)
    const number2 = Number(document.getElementById("ex1-number2").value)

    const result = number1 + number2
    document.getElementById("ex1-result").innerHTML = result

 }
 
 //EJERCICIO 2

 function average()
 {
    const examen1 = Number(document.getElementById("ex2-examen1").value)
    const examen2 = Number(document.getElementById("ex2-examen2").value)
    const examen3 = Number(document.getElementById("ex2-examen3").value)
    const examen4 = Number(document.getElementById("ex2-examen4").value)

    const resultAverage = (examen1 + examen2 + examen3 + examen4) /4
    document.getElementById("ex2-result").innerHTML = resultAverage

 }

 //EJERCICIO 3

 function areaRectangulo()
 {
   const base = Number(document.getElementById("ex3-base").value)
   const altura = Number(document.getElementById("ex3-altura").value)


   const resultArea = base * altura
   document.getElementById("ex3-result").innerHTML = resultArea

 }

 //EJERCICIO 4

function areaTriangulo()
{
   const base = Number(document.getElementById("ex4-base").value)
   const altura = Number(document.getElementById("ex4-altura").value)


   const resultAreaTriangulo = base * altura
   document.getElementById("ex4-result").innerHTML = resultAreaTriangulo

}

//EJECICIO 5
 
function areaCircunferencia()
{
   const radio = Number(document.getElementById("ex5-radio").value)


   const areaCircunferencia = Math.PI * radio * radio
   document.getElementById("ex5-result").innerHTML = areaCircunferencia


}

//EJERCICIO 6

function sueldoTrabajador()
{
   const horas = Number(document.getElementById("ex6-horas").value)
   const sueldo = Number(document.getElementById("ex6-salarioHora").value)


   const sueldoTrabajador = horas * sueldo
   document.getElementById("ex6-result").innerHTML = sueldoTrabajador
 
}
 
//Ejercicio 7
function convertirPulgadas()
{
   const metros= Number(document.getElementById("ex7-tela").value)


   const convertirPulgadas =metros / 0.0254
   document.getElementById("ex7-result").innerHTML = convertirPulgadas

}

//EJERCICIO 8
function convertirDolares()
{
   const soles= Number(document.getElementById("ex8-soles").value)


   const convertirDolares =soles / 3.69
   document.getElementById("ex8-result").innerHTML = convertirDolares

}

//EJERCICIO 9
function edad()
{
   const añoNacimiento= Number(document.getElementById("ex9-añoNacimiento").value)
   const añoActual= Number(document.getElementById("ex9-añoActual").value)


   const edad =añoActual - añoNacimiento
   document.getElementById("ex9-result").innerHTML = edad

}

//EJERCICIO 10
function calcularBono(antiguedad) 
{
   let bono = 0

   if (antiguedad === 1) {
       bono = 100
   } else if (antiguedad === 2) {
       bono = 200
   } else if (antiguedad === 3) {
       bono = 300
   } else if (antiguedad === 4) {
       bono = 400
   } else if (antiguedad === 5) {
       bono = 500
   } else if (antiguedad > 5) {
       bono = 1000
   }

   return bono;
}

function bono()

{
   const antiguedadEmpleado= Number(document.getElementById("ex10-añoAntiguedad").value)

   const bono = calcularBono(antiguedadEmpleado)
   document.getElementById("ex10-result").innerHTML = bono

}

//EJERCICIO 11

function calcularSalario() {
   
   const salarioInicial = parseFloat(document.getElementById('salarioInicial').value);
   const incrementoAnual = parseFloat(document.getElementById('incrementoAnual').value) / 100;

   
   if (isNaN(salarioInicial) || isNaN(incrementoAnual)) {
       document.getElementById('resultado').innerText = "Por favor, ingrese valores numéricos válidos.";
   } else {
       let salarioActual = salarioInicial;
       const salariosPorAño = [];

       for (let año = 1; año <= 6; año++) {
           salarioActual += salarioActual * incrementoAnual;
           salariosPorAño.push(salarioActual);
       }

       let resultadoHTML = "<h2>Resultados:</h2>";
       resultadoHTML += "<p>El salario del profesor después de 6 años es: $" + salarioActual.toFixed(2) + "</p>";
       resultadoHTML += "<p>Salario recibido en cada uno de los 6 años:</p>";
       resultadoHTML += "<ul>";
       for (let año = 0; año < 6; año++) {
           resultadoHTML += "<li>Año " + (año + 1) + ": $" + salariosPorAño[año].toFixed(2) + "</li>";
       }
       resultadoHTML += "</ul>";

       document.getElementById('resultado').innerHTML = resultadoHTML;
   }
}
     

//EJERCICIO 12

function verificarVoto() {
   const edad = parseInt(document.getElementById('edad').value);

   
       if (edad >= 18) {
           document.getElementById('resultados').innerText = "¡Usted puede votar en las próximas elecciones!";
       } else {
           document.getElementById('resultados').innerText = "Lo sentimos, usted no cumple con la edad mínima para votar en las próximas elecciones.";
       }
   }

