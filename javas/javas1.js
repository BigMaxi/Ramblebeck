function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }
  
  const lista = [5, 10, 15, 20];
  const promedio = calcularPromedio(lista);
  console.log(promedio); 