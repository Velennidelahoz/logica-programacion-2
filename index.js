// Convertidor de temperaturas
function convertir() {

    let temperatura = parseFloat(prompt("Ingrese el valor a convertir"));

        if (isNaN(temperatura)) {
          console.log ("El valor ingresado no es un numero intente otra vez");
          return convertir()   
        }
   
        else{
            let kelvin = temperatura + 273.15
            let fare = (temperatura * 9/5) + 32

                console.log (`La temperatura ${temperatura}°C ingresada tiene un valor de ${kelvin}°k`);
                console.log (`La temperatura ${temperatura}°C ingresada tiene un valor de ${fare}°F`);
      }
    }
convertir()
