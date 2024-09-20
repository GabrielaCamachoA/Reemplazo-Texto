function reemplazar(event){
    event.preventDefault();

    let texto = document.getElementById("texto").value;
    let buscar = prompt("Palabra a buscar");
    let newM = prompt("Palabra de reemplazo");
    let replace = texto.replaceAll(buscar, newM );


    if(newM == null){
        alert("No ingresaste un nuevo mensaje, intentalo de nuevo");
    }else{
        document.getElementById("resultado").textContent = `Nuevo mensaje: ${replace}`;
    }
}

