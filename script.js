

let video;

let menuactual;
let menuactualSubmenu;
let audioActividad = null;
let audioOvers=null;
let audioFondo=null;
let verificaFinaudio;
let elementoActualSound = null;
let temporalTextoBoton = ''
let botonesOopcionesA1 = [
    '#opcionA1-A1-0',
    '#opcionB1-A1-1',
    '#opcionC1-A1-0',
    '#opcionA2-A1-1',
    '#opcionB2-A1-0',
    '#opcionC2-A1-0',
    '#opcionA3-A1-0',
    '#opcionB3-A1-0',
    '#opcionC3-A1-1'
];




/*Variables actividad arrastar y soltar */
let figura_dragId;
let imag_drag_element;
let slideadtividadDragDrogA1 = 0
let slideadtividadDragDrogA2 = 0
let slideadtividadDragDrogA3 = 0
let puntosBuenoPorActividad=0
let botonesActividadActual=null
let actividadesA1DragDrop = [
    '.actividad-drag-drop-A1-A1',
    '.actividad-drag-drop-A2-A1',
    '.actividad-drag-drop-A3-A1',
]

let actividadesA2DragDrop = [
    '.actividad-drag-drop-A1-A2',
    '.actividad-drag-drop-A2-A2',
    '.actividad-drag-drop-A3-A2',
]

let actividadesA3DragDrop = [
    '.actividad-drag-drop-A1-A3',
    '.actividad-drag-drop-A2-A3',
    '.actividad-drag-drop-A3-A3',
]

let botonesSiguienteA1 = [
    '#btn-actividad-drag-drop-A1-A1',
    '#btn-actividad-drag-drop-A2-A1',
    '#btn-menu-A1'
]


let botonesSiguienteA2 = [
    '#btn-actividad-drag-drop-A1-A2',
    '#btn-actividad-drag-drop-A2-A2',
    '#btn-menu-A2'
]

let botonesSiguienteA3 = [   
    '#btn-actividad-drag-drop-A1-A3',
    '#btn-actividad-drag-drop-A2-A3',
    '#btn-menu-A3'
]


function init() {

    audioOvers = new Sonidos('14');
    audioFondo = new Sonidos('44');
    audioFondo.playAudioFondo()


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


function btnOverMenuP(){
    audioOvers.playAudio()
}


function btnOutMenuP(){
    audioOvers.stopAudio()
}

function menuSubPrincipal(id) {
    switch (id) {
        case 'menu1SubA1':
            audioActividad = new Sonidos('Audio1')
            document.querySelector('.sub-menu-principalA1').style.display = 'none';
            document.querySelector('#actividad1OpA1').style.display = 'block';
            menuactual = 'actividad1OpA1'
            break;
        case 'menu2SubA1':
            audioActividad = new Sonidos('Audio2')
            document.querySelector('.sub-menu-principalA1').style.display = 'none';
            document.querySelector('#actividad2OpA1').style.display = 'block';
            menuactual = 'actividad2OpA1'
            break;
        case 'menu3SubA1':
            audioActividad = new Sonidos('Audio3')
            document.querySelector('.sub-menu-principalA1').style.display = 'none';
            document.querySelector('#actividad3OpA1').style.display = 'block';
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
    reiniciarBotonesA1()
    switch (menuactual) {
        case 'actividad1OpA1':

            document.querySelector('.sub-menu-principalA1').style.display = 'block';
            document.querySelector('#actividad1OpA1').style.display = 'none';
            menuactual = ''
            break;
        case 'actividad2OpA1':

            document.querySelector('.sub-menu-principalA1').style.display = 'block';
            document.querySelector('#actividad2OpA1').style.display = 'none';
            menuactual = ''
            break;
        case 'actividad3OpA1':

            document.querySelector('.sub-menu-principalA1').style.display = 'block';
            document.querySelector('#actividad3OpA1').style.display = 'none';
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
    /*  audioActividad.stopAudio()
     audioActividad = null */
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
        case 'btn1ActividadDrag':
            document.querySelector('.menu-principal').style.display = 'block'
            document.querySelector('.contenedor-actividad-drag-drop-A1').style.display = 'none'
            menuactualSubmenu = ''
        break;
        case 'btn2ActividadDrag':
            document.querySelector('.menu-principal').style.display = 'block'
            document.querySelector('.contenedor-actividad-drag-drop-A2').style.display = 'none'
            menuactualSubmenu = ''
        break;
        case 'btn3ActividadDrag':
            document.querySelector('.menu-principal').style.display = 'block'
            document.querySelector('.contenedor-actividad-drag-drop-A3').style.display = 'none'
            menuactualSubmenu = ''
        break;


        default:
            break;
    }
}


function playSonido(id) {

    audioActividad.playAudio(verificarFinAudio)
    elementoActualSound = `#${id}`
    audioFondo.stopAudio()
    document.querySelector(`#${id}`).removeEventListener('click', playSonido, false)
    document.querySelector(`#${id}`).addEventListener('click', stopSonido, false)
    document.querySelector(`#${id}`).classList.remove('botonPlay')
    document.querySelector(`#${id}`).classList.add('botonPause')
    //verificarFinAudio(`#${id}`)
}

function verificarFinAudio() {
    audioFondo.playAudioFondo()
    document.querySelector(elementoActualSound).classList.remove('botonPause')
    document.querySelector(elementoActualSound).classList.add('botonPlay')
}

function stopSonido(e) {
    audioActividad.stopAudio()
    audioFondo.playAudioFondo()
    document.querySelector(`#${e.target.id}`).removeEventListener('click', stopSonido, false)
    document.querySelector(`#${e.target.id}`).addEventListener('click', playSonido, false)
    document.querySelector(`#${e.target.id}`).classList.add('botonPlay')
    document.querySelector(`#${e.target.id}`).classList.remove('botonPause')
}

function verificarRespuesta(e) {

    let respuesta = e.substring(e.length - 1, e.length)
   

    if (respuesta == 1) {
        document.querySelector(`#${e}`).innerHTML = ''

        document.querySelector(`#${e}`).classList.remove('button')
        document.querySelector(`#${e}`).classList.add('opcionCorrectaIcono')
    } else {
        temporalTextoBoton = document.querySelector(`#${e}`).innerHTML
        document.querySelector(`#${e}`).style.pointerEvents = 'none'
        document.querySelector(`#${e}`).innerHTML = ''
        document.querySelector(`#${e}`).classList.remove('button')
        document.querySelector(`#${e}`).classList.remove('opcionCorrectaIcono')
        document.querySelector(`#${e}`).classList.add('opcionInCorrectaIcono')
        setTimeout(() => {
            document.querySelector(`#${e}`).style.pointerEvents = 'all'
            document.querySelector(`#${e}`).innerHTML = temporalTextoBoton
            document.querySelector(`#${e}`).classList.remove('opcionCorrectaIcono')
            document.querySelector(`#${e}`).classList.remove('opcionInCorrectaIcono')
            if(!verifyMobile()){
                document.querySelector(`#${e}`).classList.add('button')
            }else{
                document.querySelector(`#${e}`).classList.add('button-mobile')
            }
         
        }, 1000);
    }
}


function verifyMobile() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile
}

function reiniciarBotonesA1() {
    botonesOopcionesA1.forEach(element => {
        let respuesta = element.substring(element.length - 1, element.length)
        if (respuesta == 1) {
            document.querySelector(`${element}`).innerHTML = temporalTextoBoton
        }
        document.querySelector(`${element}`).classList.remove('opcionCorrectaIcono')
        document.querySelector(`${element}`).classList.remove('opcionInCorrectaIcono')
        document.querySelector(`${element}`).classList.add('button')
    });
}

function cargarActividadDragAndDrop(e) {
    
    switch (e) {
        case 'btn1ActividadDrag':
            document.querySelector('#actividad1OpA1').style.display = 'none'
            document.querySelector('.contenedor-actividad-drag-drop-A1').style.display = 'block'
            menuactualSubmenu='btn1ActividadDrag'
            botonesActividadActual=botonesSiguienteA1
            botonesActividadActual.forEach(element => {
                document.querySelector(`${element}`).classList.remove('disabledbutton')
                document.querySelector(`${element}`).classList.add('disabledbutton')
            });
            break;

        case 'btn2ActividadDrag':
            document.querySelector('#actividad2OpA1').style.display = 'none'
            document.querySelector('.contenedor-actividad-drag-drop-A2').style.display = 'block'
            menuactualSubmenu='btn2ActividadDrag'
            botonesActividadActual=botonesSiguienteA2
            botonesActividadActual.forEach(element => {
                document.querySelector(`${element}`).classList.remove('disabledbutton')
                document.querySelector(`${element}`).classList.add('disabledbutton')
            });
            break;
        case 'btn3ActividadDrag':
            document.querySelector('#actividad3OpA1').style.display = 'none'
            document.querySelector('.contenedor-actividad-drag-drop-A3').style.display = 'block'
            menuactualSubmenu='btn3ActividadDrag'
            botonesActividadActual=botonesSiguienteA3
            botonesActividadActual.forEach(element => {
                document.querySelector(`${element}`).classList.remove('disabledbutton')
                document.querySelector(`${element}`).classList.add('disabledbutton')
            });
            break;

        default:
            break;
    }
}


function actividadSiguienteDragDropA1() {
    document.querySelector(`${actividadesA1DragDrop[slideadtividadDragDrogA1]}`).style.display = 'none'
    document.querySelector(`${actividadesA1DragDrop[slideadtividadDragDrogA1 + 1]}`).style.display = 'block'
    slideadtividadDragDrogA1++
  
}

function actividadSiguienteDragDropA2() {
    document.querySelector(`${actividadesA2DragDrop[slideadtividadDragDrogA2]}`).style.display = 'none'
    document.querySelector(`${actividadesA2DragDrop[slideadtividadDragDrogA2 + 1]}`).style.display = 'block'
    slideadtividadDragDrogA2++
   
}

function actividadSiguienteDragDropA3() {
    document.querySelector(`${actividadesA3DragDrop[slideadtividadDragDrogA3]}`).style.display = 'none'
    document.querySelector(`${actividadesA3DragDrop[slideadtividadDragDrogA3 + 1]}`).style.display = 'block'
    slideadtividadDragDrogA3++
   
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.pageX = ev.pageX + 26
    ev.pageY = ev.pageY + 27
    ev.dataTransfer.setData("text", ev.target.id);
    //figura_dragId = ev.target.id.split("-")[1]

    figura_dragId = ev.path[0].id


    imag_drag_element = ev.target.src
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let dropElemento = ev.path[0].id
    console.log(figura_dragId.substring(0, 4), ev.path[0].id.substring(0, 4));
    if (figura_dragId.substring(0, 4) === ev.path[0].id.substring(0, 4)) {

        //bloque para verificar los pasos y los elementos a mostrar


        let elementodrag = document.querySelector(`#${dropElemento}`)
        elementodrag.style.border = '1px solid green'
        elementodrag.style.backgroundColor = '#0080008c'
        elementodrag.style.borderRadius = '12px'
        document.querySelector(`#${figura_dragId}`).removeAttribute('draggable');
        document.querySelector(`#${figura_dragId}`).style.pointerEvents = 'none';
        puntosBuenoPorActividad++
        verificarAvenceBoton()
        
       
        /*  let data = ev.dataTransfer.getData("text");
         let nodeCopy = document.getElementById(data).cloneNode(true);
         nodeCopy.removeAttribute('draggable'); */
        /* ev.target.appendChild(nodeCopy); */

    } else {

        let elementodrag = document.querySelector(`#${dropElemento}`)
        elementodrag.style.border = '1px solid red'
        elementodrag.style.backgroundColor = '#ff00009e'
        elementodrag.style.borderRadius = '12px'
        setTimeout(() => {
            elementodrag.style.border = 'none'
            elementodrag.style.backgroundColor = 'transparent'
        }, 1500);
    }

}

function verificarAvenceBoton(){
    if(puntosBuenoPorActividad==2){
        puntosBuenoPorActividad=0
        document.querySelector(`${botonesActividadActual[0]}`).classList.remove('disabledbutton')
        document.querySelector(`${botonesActividadActual[0]}`).classList.add('enabledbutton')
        botonesActividadActual.shift()
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
        @media print {
            .divtexto{
                width: 30vh ;
            }
        }
    
        @media print and (orientation:landscape) 
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
        'width=' + screen.width//works in IE, but here for completeness
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

        @media print {
        .divtexto{
            width: 30vh ;
        }
        }

        @media print and (orientation:landscape) 
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