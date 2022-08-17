

let producto = '';
let total = 0;

function compra() {

    while(producto != "4") {

    producto = prompt("Que quiere comprar? Ingrese el numero del producto.\n 1. Torta Oreo $1000.\n 2. Budin de Chocolate $900.\n 3. Chocotorta $1200.\n 4. No quiero nada mas");

    switch(producto) {
        case '1':
            total += 1000;
            alert('Su compra es de: $' +total);
            break;

        case '2':
            total += 900;
            alert('Su compra es de: $' +total);
            break;
        case '3':
            total += 1200;
            alert('Su compra es de: $' +total);
            break;
        case '4':
            alert('Gracias por comprar en DulceNoviembre Rosario, el total es: $' +total);
            break;
    }

    }

}

compra(); 