function obtenerEndPointTecnologia() {

    let url = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";

    fetch(url, {
        method: "GET",

    }).then(res => res.json())
        .catch(error => console.log('Error', error))
        .then(response => {


            let mens = "";

            for (let index = 0; index < 3; index++) {
                mens = mens + `<a href="html/camila.html">${response[index].titulo}</a>`;
            }
            document.getElementById('noticiasTecnologia').innerHTML = mens;


        })

};


function obtenerEndPointDeporte() {

    let url = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";

    fetch(url, {
        method: "GET",

    }).then(res => res.json())
        .catch(error => console.log('Error', error))
        .then(response => {


            let mens = "";
            for (let index = 0; index < 3; index++) {
                mens = mens + `<a href="#">${response[index].titulo}</a>`;
            }
            document.getElementById('noticiasDeportes').innerHTML = mens;


        })

}





function obtenernoticia() {

    let url = "https://carlosreneas.github.io/endpoints/noticia_6.json";

    fetch(url, {
        method: "GET"
    }).then(res => res.json())
        .catch(error => console.log('Error', error))
        .then(response => {

            let img = document.getElementById("fotoNoticias2");
            img.setAttribute("src", `${response.img}`);

            let mens = "";

            mens = mens + ` <div >
    <h2>${response.titulo} - ${response.categoria} - ${response.fecha}</h2>
    <p>${response.detalle} </p>
    
    
/div>`;

            document.getElementById('noticiasRes').innerHTML = mens;

        })

}

function insertarFecha() {

    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var f = new Date();
    document.getElementById("fecha").innerHTML = `${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`;

}



insertarFecha();
obtenernoticia();
obtenerEndPointDeporte();
obtenerEndPointTecnologia();


