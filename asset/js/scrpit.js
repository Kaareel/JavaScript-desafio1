button = document.querySelector("button");

function multiply (){
    productos = document.querySelector("#numeros").value;
    total = productos*869990;
    paint = document.querySelector("#color").value;
    Num = new Intl.NumberFormat('de-DE').format(total);
    if(isNaN(productos)){
        alert="Numeros enteros";
        productos = 0;
        total = 0;
        document.querySelector("#total").textContent = total;
        document.querySelector("#cantidad").textContent = productos;
    }
    else{
        document.querySelector("#total").textContent = Num;
        document.querySelector("#cantidad").textContent = productos;
    }
    document.querySelector(".pinturas").style.backgroundColor = paint;
    if(Colores){
        document.querySelector(".pinturas").style.border = "1px solid black"
    }
}