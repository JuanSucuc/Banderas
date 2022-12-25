//variables Globales
let igual = "=";
let comillas = '"';

//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];


//funcion de captura de datos

function agregarDatos(){
    let nombre = prompt("Ingrese un nombre");
    let bandera = prompt("Ingrse bandera");
    let capital = prompt("Ingrese nombre de Capital");
    let idioma_oficial = prompt("Ingrese idioma");
    let moneda = prompt("Ingrese moneda");
   
    return {'nombre':nombre, 'bandera': bandera, 'capital': capital, 'idioma': idioma_oficial, 'moneda':moneda};
}







//////////////


agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {

    //listeners del boton mostrar paises
    document.querySelector("#mostrarPaises").addEventListener("click",
function () {
    mostrarPaises();
});

    //listeners para ocultar paises
document.querySelector("#mostrarPaises").addEventListener("dblclick",
function () {
    document.getElementById("paises").innerHTML = "";
});


}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
let ListaDeBanderas = "";

    for(let pais of paises){

        ListaDeBanderas += '<table class="table text-center table-hover table-bordered"><tr>';
            for(datosPais in pais){
                if(datosPais == "bandera"){
                    datosPais = null;
                } else{
                      ListaDeBanderas += "<th>" + datosPais + "</th>";
                }
            }
    
            ListaDeBanderas += '</tr>';

            ListaDeBanderas += '<tr>';
            for(datosPais in pais){
                if(datosPais == "bandera"){
                    datosPais = null;
                } else{
                      ListaDeBanderas += "\n <td>" + pais[datosPais] + "</td>";
                }
            }
    
            ListaDeBanderas += '</tr>';
    
            ListaDeBanderas += '<tr>';
            for(datosPais in pais){
                if(datosPais == "bandera"){
                    ListaDeBanderas += '\n <td colspan="4">' + '<img src' + igual + comillas + pais[datosPais] + comillas + '>' + '</img>' + "</td>";
                    
                } else{
                    datosPais = null;
                }
            }
    
            ListaDeBanderas += '</tr></table>';
    
    }
    document.getElementById("paises").innerHTML = ListaDeBanderas;
    
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let masPaise = agregarDatos();
    paises.unshift(masPaise);
    mostrarPaises();

}

document.querySelector("#agregarPais").addEventListener("click",
    function () {
        agregarPais();
    });






