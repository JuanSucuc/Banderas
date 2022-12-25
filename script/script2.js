//funcion que captura los datos del usuario
/*
function capturarDatos(){
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese edad"); 
    //devolvemos un arreglo de manera anonima
    return [nombre, edad];
}

//funcion que devuelve objeto
function capturarDatos(){
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese edad"); 
    //devolvemos un objeto de manera anonima
    return {'nombre': nombre, 'edad': edad};
}*/

const datos = [
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


datos.unshift(
    {
        nombre: "Brazil",
        moneda: "Real brasileño (R$, BRL)",
        capital: "Brasilia",
        idioma: "portugués",
        bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
    }
)

//unshift
console.log(datos);

