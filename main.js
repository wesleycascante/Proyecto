/* INICIO EVENTO MOSTRAR */

function mostrar() {


    $("#boton").click(function (e) {
        e.preventDefault();
        $("#imagenes").toggle("slow");
        return false;
    });



    //API

    let url = "https://randomuser.me/api/";
    let contenido = document.getElementById("contenido");
    let nombre;
    let imagen;

    fetch(url)
        .then(Response => Response.json())
        .then(data => {

            nombre = data.results[0].name.first;
            imagen = data.results[0].picture.large;
            email = data.results[0].email;
            date = data.results[0].registered.date;
            country = data.results[0].location.country;
            phone = data.results[0].phone;
            password = data.results[0].login.password;

            html =
                `
        <div class="alert alert-success" role="alert">
        <h1 class="alert-heading">Nuestros futuros estudiantes!</h1>
            <img src="${imagen}" alt="" class="imgfluid rounded-circle">
            <h4 class="alert-heading"><p>${nombre} </p></h4>
            <p>Email: ${email} </p>
            <p>Date: ${date} </p>
            <p>Country: ${country} </p>
            <p>Phone: ${phone} </p>
            <p>Password: ${password} </p>
        </div>
    `

            contenido.innerHTML = html;

        });

}

/* FIN EVENTO MOSTRAR */



/*INICIO SCROLL REVEAL*/

window.sr = ScrollReveal();

sr.reveal("#navbar", {
    duration: 1000,
});

sr.reveal("#botones", {
    duration: 2000,
    origin: 'top',
    distance: '50px',
});

sr.reveal("#tabla", {
    duration: 1000,
    origin: 'top',
    distance: '100px',
});

sr.reveal("#disenofinal", {
    duration: 2000,
    origin: 'right',
    distance: '100px',
});

sr.reveal("#jumbotron", {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    delay: 500
});

sr.reveal("#iniciarsesion1", {
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

sr.reveal("#iniciarsesion2", {
    duration: 2000,
    origin: 'top',
    distance: '50px'
});

sr.reveal("#contactanos", {
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

sr.reveal("#footer", {
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

/*FIN SCROLL REVEAL*/




/*INICIO TOGGLE*/

$(document).ready(function () {

    $("#javascript").hide();
    $("#angular").hide();
    $("#react").hide();


    $("#btnjavascript").click(function (e) {
        e.preventDefault();
        $("#javascript").toggle("slow");
        return false;
    });

    $("#btnangular").click(function (e) {
        e.preventDefault();
        $("#angular").toggle("slow");
        return false;
    });

    $("#btnreact").click(function (e) {
        e.preventDefault();
        $("#react").toggle("slow");
        return false;
    });

});

/*FIN TOGGLE*/






//INICIO TABLA

function verTabla() {

    let url = "https://jsonplaceholder.typicode.com/todos/";
    let contenidoTabla = document.getElementById("contenidoTabla");
    let misDatos;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(element => {

                misDatos +=

                    `
            <tr>

            <td>${element.albumId}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.url}</td>
            <td>${element.thumbnailUrl}</td>

            </tr>
            `

                contenidoTabla.innerHTML = misDatos;

            });
        })

}

//FIN TABLA