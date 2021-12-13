

let video;

let menuactual;
let menuactualSubmenu;

function init() {


}

function menuPrincipal(id) {
    switch (id) {
        case 'menu1P':
            document.querySelector('.menu-principal').style.display = 'none'
            document.querySelector('.sub-menu-principalA1').style.display = 'block'
            menuactualSubmenu = 'SubMenu1P'
            break;
        case 'menu2P':
            document.querySelector('.menu-principal').style.display = 'none'
            document.querySelector('.sub-menu-principalA2').style.display = 'block'
            menuactualSubmenu = 'SubMenu2P'
            break;

        default:
            break;
    }
}

function menuSubPrincipal(id) {
    switch (id) {
        case 'menu1SubA1':
            document.querySelector('.sub-menu-principalA1').style.display = 'none';
            document.querySelector('#actividad1OpA1').style.display='block';
            menuactual = 'actividad1OpA1'
            break;
        case 'menu2SubA1':
            document.querySelector('.sub-menu-principalA1').style.display = 'none';
            document.querySelector('#actividad2OpA1').style.display='block';
            menuactual = 'actividad2OpA1'
            break;
        case 'menu3SubA1':
            document.querySelector('.sub-menu-principalA1').style.display = 'none';
            document.querySelector('#actividad3OpA1').style.display='block';
            menuactual = 'actividad3OpA1'
            break;
        case 'menu1SubA2':
            document.querySelector('.sub-menu-principalA2').style.display = 'none';
            document.querySelector('#actividad1').style.display = 'block';
            menuactual = 'menu1SubA2'
            break;
        case 'menu2SubA2':
            document.querySelector('.sub-menu-principalA2').style.display = 'none';
            document.querySelector('#actividad2').style.display = 'block';
            menuactual = 'menu2SubA2'
            break;

        default:
            break;
    }
}

function retornarMenuSubMenu() {
    switch (menuactual) {
        case 'actividad1OpA1':
            document.querySelector('.sub-menu-principalA1').style.display = 'block';
            document.querySelector('#actividad1OpA1').style.display='none';
            menuactual = ''
            break;
        case 'actividad2OpA1':
            document.querySelector('.sub-menu-principalA1').style.display = 'block';
            document.querySelector('#actividad2OpA1').style.display='none';
            menuactual = ''
            break;
        case 'actividad3OpA1':
            document.querySelector('.sub-menu-principalA1').style.display = 'block';
            document.querySelector('#actividad3OpA1').style.display='none';
            menuactual = ''
            break;
        case 'menu1SubA2':
            document.querySelector('.sub-menu-principalA2').style.display = 'block';
            document.querySelector('#actividad1').style.display = 'none';
            break;
        case 'menu2SubA2':
            document.querySelector('.sub-menu-principalA2').style.display = 'block';
            document.querySelector('#actividad2').style.display = 'none';
            break;

        default:
            break;
    }
}

function retornarMenuPrincipal() {
    switch (menuactualSubmenu) {
        case 'SubMenu1P':
            document.querySelector('.menu-principal').style.display = 'block';
            document.querySelector('.sub-menu-principalA1').style.display = 'none';
            menuactualSubmenu = ''
            break;
        case 'SubMenu2P':
            document.querySelector('.menu-principal').style.display = 'block'
            document.querySelector('.sub-menu-principalA2').style.display = 'none'
            menuactualSubmenu = ''
            break;


        default:
            break;
    }
}


// Get the modal
let modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

/* span.addEventListener('click', ocultarModal); */
window.addEventListener('click', ocultarModalVentana)

function ocultarModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function ocultarModalVentana(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function MostrarVideo() {
    modal.style.display = "flex";
}



function imprimirHistoriaA1(event) {

    let textos = document.querySelectorAll('.textareaA1')

    /*  textos.forEach((texto)=>{
         console.log(texto.value);
     }) */

    event.preventDefault()

    let base64StringImagen1 = imagenData('imagen1A1')
    let base64StringImagen2 = imagenData('imagen2A1')
    let base64StringImagen3 = imagenData('imagen3A1')

    let params = [
        'height=' + screen.height,
        'width=' + screen.width,
        'fullscreen=yes' // only works in IE, but here for completeness
    ].join(',')

    var printWindow = window.open('Historia 1', '', params);
    printWindow.document.write(`<html><head><title>Historia</title><style>
 
    .contenedor-historia{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 12px;
        height: max-content;
        align-items: center;
        align-content: center;
        text-align:center;
        width: 100vw;
        height: 100vh;
        background-image: url('./assets/img/fondocomic.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        }
        
        .divtexto{
            width: 40vh;
            border: 2px solid #295ccd;
            word-break: break-all;
            height: 40vh;
            text-align: center;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            margin: 0px auto;
            background: #ffffffad;
        }
        
        </style>`);
    printWindow.document.write('</head><body >');
    printWindow.document.write(`<div class="contenedor-historia">
    <div><img src="${base64StringImagen1}"></div>
    <div><img src="${base64StringImagen2}"></div>
    <div><img src="${base64StringImagen3}"></div>
    <div class="divtexto">${textos[0].value}</div>
    <div class="divtexto">${textos[1].value}</div>
    <div class="divtexto">${textos[2].value}</div>
                          </div>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 1200);
    return false
}


function imprimirHistoriaA2(event) {

    let textos = document.querySelectorAll('.textareaA2')

    /*  textos.forEach((texto)=>{
         console.log(texto.value);
     }) */

    event.preventDefault()

    let base64StringImagen1 = imagenData('imagen1A2')
    let base64StringImagen2 = imagenData('imagen2A2')
    let base64StringImagen3 = imagenData('imagen3A2')

    let params = [
        'height=' + screen.height,
        'width=' + screen.width,
        'fullscreen=yes' // only works in IE, but here for completeness
    ].join(',')

    var printWindow = window.open('Historia 1', '', params);
    printWindow.document.write(`<html><head><title>Historia</title><style>
 
    .contenedor-historia{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 12px;
        height: max-content;
        align-items: center;
        align-content: center;
        text-align:center;
        width: 100vw;
        height: 100vh;
        background-image: url('./assets/img/fondocomic.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        }
        
        .divtexto{
            width: 40vh;
            border: 2px solid #295ccd;
            word-break: break-all;
            height: 40vh;
            text-align: center;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            margin: 0px auto;
            background: #ffffffad;
        }
        
        </style>`);
    printWindow.document.write('</head><body >');
    printWindow.document.write(`<div class="contenedor-historia">
    <div><img src="${base64StringImagen1}"></div>
    <div><img src="${base64StringImagen2}"></div>
    <div><img src="${base64StringImagen3}"></div>
    <div class="divtexto">${textos[0].value}</div>
    <div class="divtexto">${textos[1].value}</div>
    <div class="divtexto">${textos[2].value}</div>
                          </div>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 1200);
    return false
}


function imagenData(id) {
    var c = document.createElement('canvas');
    var img = document.getElementById(`${id}`);
    c.height = img.naturalHeight;
    c.width = img.naturalWidth;
    var ctx = c.getContext('2d');

    ctx.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL();
}