function opcionSubMenu(bucle) {
    var alternativa;
    do {
      switch (bucle) {
        case 1:
          alternativa = parseInt(prompt('Menu de opciones:\n1. Algoritmo que sume los N números naturales\n2. Un Programa que cuente los números pares, en N\n3. Un programa que pueda calcular N números en la serie Fibonacci\n4. Diseñar un algoritmo para obtener la suma de los números pares hasta 100 incluidos mientras\n5. Un programa que permita contar e indicar cuanta disponibilidad hay en una sala\n6. Volver'));
          switch (alternativa) {
            case 1:
              var N = parseInt(prompt('Ingrese el valor de N (Tiene que ser un número entero positivo):'));
              var suma = 0;
              var contador = 1;
              while (contador <= N) {
                suma += contador;
                contador++;
              }
              alert('La suma de los primeros ' + N + ' números naturales es: ' + suma);
              break;
            case 2:
              var N = parseInt(prompt('Introduce un número entero, positivo'));
              var suma = 0;
              var contador = 2;
              while (contador <= N) {
                alert(contador);
                contador += 2;
              }
              break;
            case 3:
              var num1 = 0, num2 = 1, siguiente, i, n;
              num1 = 0;
              num2 = 1;
              i = 1;
              n = parseInt(prompt('Ingrese el número de términos de la serie Fibonacci a generar: '));
              while (i <= n) {
                alert(num1);
                siguiente = num1 + num2;
                num1 = num2;
                num2 = siguiente;
                i++;
              }
              break;
            case 4:
              var suma = 0, i = 0;
              while (i <= 100) {
                if (i % 2 === 0) {
                  suma += i;
                }
                i++;
              }
              alert('La suma de los números pares hasta 100 es: ' + suma);
              break;
            case 5:
              var Salon = 300;
              var C = 0;
              var A = 0;
              while (C <= Salon) {
                var P = parseInt(prompt('Ingrese cantidad de Personas que ingresa'));
                C += P;
                A = Salon - C;
                alert('Hay ' + A + ' Lugares disponibles');
              }
              alert("Salón lleno");
              break;
            case 6:
              alternativa = 6;
              break;
            default:
              alert('Opción inválida');
          }
          break;
        case 2:
          // Código para la opción 2
          break;
        case 3:
          // Código para la opción 3
          break;
        default:
          alert('Opción inválida');
      }
    } while (alternativa !== 6);
  }
  
  function salir() {
    alert('Adiós');
    window.close();
  }
  