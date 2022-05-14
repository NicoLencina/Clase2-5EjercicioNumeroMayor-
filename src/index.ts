//accedo al boton cuando el usurio de en calcular y realizoz las operaciones logicas
button.addEventListener("click", () => {
  //ingreso en las variable el valor de los input de HTML
  let n1: number = Number(v1.value);
  let n2: number = Number(v2.value);
  let n3: number = Number(v3.value);
  //por medio de los comparadores logicos realizo las preguntas
  if (n1 === n2 || n2 === n3 || n1 === n3) {
    //Si al menos una se repite termino y pido nuevos valores
    console.log(
      "Ingrese 3 valores diferentes; recuerde que no se pueden repetir."
    );
  } else {
    //en caso contrario ingreso a los comparadores de las variables
    if (n1 > n2 && n1 > n3) {
      //Si n1 es mayor que las otras des
      console.log("El numero ", n1, " es el mayor");
    }
    if (n2 > n1 && n2 > n3) {
      //si n2 es mayor que
      console.log("El numero ", n2, " es el mayor");
    }
    if (n3 > n1 && n3 > n2) {
      //si n3 es mayor que
      console.log("El numero ", n3, " es el mayor");
    }
  }
});
