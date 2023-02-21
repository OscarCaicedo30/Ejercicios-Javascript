//---------------------------------------------------------------------------------------
function operadoresLogicos(cajas, transporte, pedido) {
	if (cajas && transporte && pedido) {
		console.log("Pedido del extranjero")
		return "Pedido del extranjero";
	} else if ((transporte || cajas) && pedido) {
		console.log("Pedido local")
		return "Pedido local";
	} else if (!pedido) {
		console.log("No se ha hecho ningún pedido aún")
		return "No se ha hecho ningún pedido aún";
	} else {
		console.log("No se puede enviar el pedido")
		return "No se puede enviar el pedido";
	}
}

//..................................................................
function cuentaCaracteres(sentencia) {
    let abc = {};

    for (let i = 0; i < sentencia.length; i++) {
        let caracter = sentencia[i].toLowerCase();
        if (caracter === ' ') {
            continue; // salta si hay un espacio
        }
        if (abc[caracter]) {
            abc[caracter]++;
        } else {
            abc[caracter] = 1;
        }
    }
    console.log(JSON.stringify((abc)));
    return JSON.stringify(abc);
}
//Reto: Cuenta carácteres
// --------------------------------------------------------------
function numeroPrimo(numero) {
	// Casos especiales
	if (numero <= 1) {
		console.log(false);
		return false;
	}

	if (numero === 2) {
		console.log(true);
		return true;
	}
	// Verificar divisores
	for (let i = 2; i <= Math.floor(numero / 2); i++) {
		if (numero % i === 0) {
			console.log(false);
			return false;
		}
	}

	// Si llegamos aquí, el número es primo
	console.log(true);
	return true;
}
//Reto : Número pares e impares
 //--------------------------------------------------------------