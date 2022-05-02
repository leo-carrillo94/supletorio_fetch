function obtenerEndPointTecnologia() {


    let url = 'https://carlosreneas.github.io/endpoints/categoria_tecnologia.json';


    fetch(url, {
        method: 'GET', // or 'PUT'

    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

            let mens = "";

            for (let index = 0; index < 3; index++) {
                mens = mens + `<a href="html/camila.html">${response[index].titulo}s</a>`;
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
                mens = mens + `<a href="html/camila.html">${response[index].titulo}</a>`;
            }
            document.getElementById('noticiasDeportes').innerHTML = mens;

        })
};

function obtenernoticiasImg() {

    let url = "https://carlosreneas.github.io/endpoints/noticias.json";

    fetch(url, {
        method: "GET",

    }).then(res => res.json())
        .catch(error => console.log('Error', error))
        .then(response => {

            let mens = "";

            let img = document.getElementById("fotoNoticias2");
            img.setAttribute("src", `${response[0].img}`);
            //<img id="fotoNoticias" src="img/noticias.jpg" alt="foto">
            //  document.getElementById('fotoNoticias').innerHTML =  `<img id="fotoNoticias" src="${json[0].img}" alt="foto"></img>`;

            for (let index = 0; index < 3; index++) {
                mens = mens + ` <div >
             <h2>${response[index].titulo} - ${response[index].categoria} - ${response[index].fecha}</h2>
             <p>${response[index].descripcion} <a id="noti${index}" href="#">ver mas</a></p>
             
             
         </div>`
            }
            document.getElementById('noticiasRes').innerHTML = mens;

        })
};

function aggLinks() {
    let l1 = document.getElementById("noti0");
    l1.href = "html/democracia.html";

}

function insertarFecha() {

    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var f = new Date();
    document.getElementById("fecha").innerHTML = `${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`;

}



insertarFecha();
obtenernoticiasImg();
obtenerEndPointDeporte();
obtenerEndPointTecnologia();
setTimeout(aggLinks, 2000);

