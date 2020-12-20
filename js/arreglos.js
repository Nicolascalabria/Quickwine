/* creo objeto constructor para cargar vinos a mi catalogo */
function Vino(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

/*Creo el arreglo catalogo vacio para poder ir incorporando los objetos Vino*/
const catalogo = [];

/*Creo los objetos vino con nombre y precio como parametros */
let enemigo = new Vino("Gran enemigo malbec", 1800);
let catalpa = new Vino("Catalpa Pinot Noir", 1500);
let casarena = new Vino("Casarena Malbec", 2500);

/*Cargo mis distintos vinos al catalogo*/
catalogo.push(enemigo);
catalogo.push(catalpa);
catalogo.push(casarena);

console.table(catalogo);

/*Recorro mi arreglo imprimiendo los distintos vinos cargados*/
for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i]);
}