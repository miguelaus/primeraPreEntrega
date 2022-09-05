

function Pizza(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.hablar = function () {console.log ("la pizza " + this.version + " es de tamaño " + this.size + " y su precio es " + this.precio)}
}


const pizzaMargarita = new Pizza("Margarita", 550, "mediana")
const pizzaPrimavera = new Pizza("Primavera" , 600, "mediana")
const pizzaCaprese = new Pizza("Caprese", 650, "grande")

let arrayPizzas =[pizzaCaprese, pizzaPrimavera, pizzaMargarita]




function Pasta(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.hablar = function () {console.log ("la pasta " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio)}
}

const pastaSpaghetti = new Pasta('spaghetti', 400, "grande");
const pastaRavioles = new Pasta('ravioles', 600, "grande");
const pastaMacarrones = new Pasta('macarrones', 450, "grande");

let arrayPasta = [pastaRavioles, pastaSpaghetti, pastaMacarrones]




function Ensalada(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.hablar = function () {console.log ("la Ensalada " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio)}

}

const ensaladaTomateLechuga = new Ensalada('Tomate y Lechuga', 750, "mediana");
const ensaladaCesar = new Ensalada('cesar', 800, "mediana");
const ensaladaPapaHuevo = new Ensalada('papaHuevo', 800, "mediana");

let arrayEnsalada = [ensaladaCesar, ensaladaPapaHuevo, ensaladaTomateLechuga] 




function Carne(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.hablar = function () {console.log ("la Carne: " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio)}

}

const carneBife = new Carne('bife', 400, "mediano");
const carneHamburguesa = new Carne('hamburguesa', 600, "mediana");
const carneVacio = new Carne('vacio', 650, "mediano");
const carneChorizo = new Carne('chorizo', 400, "mediano");
const carneAsado = new Carne('asado', 600, "mediana");

let arrayCarne = [carneBife, carneAsado, carneVacio, carneChorizo, carneHamburguesa] 



function Trago(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.hablar = function () {console.log ("El trago de " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio)}

}

const tragoVino = new Trago('vino', 400, "copa");
const tragoCerveza = new Trago('cerveza', 600, "pinta");
const tragoRefresco = new Trago('refresco', 650, "vaso");

let arrayTragos =  [tragoVino, tragoCerveza, tragoRefresco]



function Postre(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.hablar = function () {console.log ("El postre " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio)}

}

const postreFlan = new Postre('flan', 400, "chico");
const postreFruta = new Postre('fruta', 600, "chico");
const postreHelado = new Postre('helado', 650, "chico");

let arrayPostres = [postreFlan, postreFruta, postreHelado]



function Cafe(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.hablar = function () {console.log ("El " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio)}

}

const cafeCafe = new Cafe('cafe', 300, "chico");
const cafeTe = new Cafe('te', 250, "chico");
const cafeCapuccino = new Cafe('capuccino', 350, "chico");

let arrayCafe = [cafeCafe, cafeTe, cafeCapuccino ]




function buscarPorPlato() {
	let buscarPlato = prompt("Ingrese el nombre del plato/bebida/postre deseado")

	let platoEncontrado = arrayPizzas.find((Pizza)=>Pizza.version.toLowerCase() == buscarPlato.toLowerCase()) 
		|| arrayPasta.find((Pasta)=>Pasta.version.toLowerCase() == buscarPlato.toLowerCase()) 
		|| arrayCarne.find((Carne)=>Carne.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayEnsalada.find((Ensalada)=>Ensalada.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayTragos.find((Tragos)=>Tragos.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayCafe.find((Cafe)=>Cafe.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayPostres.find((Postre)=>Postre.version.toLowerCase() == buscarPlato.toLowerCase())

	if(platoEncontrado == undefined ) {
		console.log("Su plato no fue encontrado")
	}else{
		platoEncontrado.hablar()	
	}


}


let arrayMenu = arrayEnsalada.concat(arrayCarne, arrayPasta, arrayPizzas, arrayTragos ,arrayCafe, arrayPostres)


function buscarPorPrecio() {
	let buscarPrecio = prompt("Ingrese el monto maximo a gastar")

	let precioBusqueda = arrayMenu.filter((Pizza)=>Pizza.precio <= buscarPrecio)
	
	if(precioBusqueda == 0 ) {
		console.log("No existen productos con ese precio")
	}else{
		console.log("Los productos encontrados con ese precio son:")
		for (let precioEncontrado of precioBusqueda) {
			precioEncontrado.hablar()
		}
	}
}


let nombreCliente = prompt("Buenos días, porfavo ingrese su nombre y apellido")

let nombreCalle = prompt("Porfavor ingrese su calle, ej: San Martin")

let numeracionCalle = parseInt(prompt("Por favor ingrese su numeracion"))

let menu = prompt ("Ingrese un numero para conocer nuestros platos: 1 - pizza, 2 - pasta, 3 - ensalada, 4 - carne, 5 - Tragos, 6 - Postres, 7 - Cafe, 8 - Buscar plato, 9 - Buscar por monto maximo de compra ")

switch (menu){

	case "1":
	for (Pizza of arrayPizzas) {Pizza.hablar();}
	break;

	case "2":
	for (const Pasta of arrayPasta) {Pasta.hablar();}
	break; 

	case "3":
	for( Ensalada of arrayEnsalada) {Ensalada.hablar();}
	break;

	case "4":
	for (Carne of arrayCarne) {Carne.hablar();}
	break; 

	case "5":
	for (Trago of arrayTragos) {Trago.hablar();}
	break; 

	case "6":
	for (Postre of arrayPostres) {Postre.hablar();}
	break;

	case "7":
	for (Cafe of arrayCafe) {Cafe.hablar();}
	break; 

	case "8":
	buscarPorPlato();
	break;

	case "9":
	buscarPorPrecio();
	break;


	default:
	menu = prompt ("Ingrese el codigo de su pedido")

}