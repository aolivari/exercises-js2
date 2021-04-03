// Write your code here
//crear un array con todas las fotos
//hacer que cada vez que se presione el boton ff vaya en direccion uno mas en cada loop del array
//hacer que cada vez que se presione el boton rr vaya en direccion uno menos en cada loop del array


//vamos por el array

let fotos = ["./fotos/toño (1).jpg","./fotos/toño (2).jpg","./fotos/toño (3).jpg","./fotos/toño (4).jpg",
    "./fotos/toño (5).jpg","./fotos/toño (6).jpg","./fotos/toño (7).jpg",
    "./fotos/toño (8).jpg","./fotos/toño (9).jpg","./fotos/toño (10).jpg",
    "./fotos/toño (11).jpg","./fotos/toño (12).jpg","./fotos/toño (13).jpg",
    "./fotos/toño (14).jpg","./fotos/toño (15).jpg","./fotos/toño (16).jpg",
    "./fotos/toño (17).jpg","./fotos/toño (18).jpg",
    "./fotos/toño (20).jpg","./fotos/toño (21).jpg","./fotos/toño (22).jpg"]

//array creado con todas las ubicaciones de las fotos, debe de haber una manera mejor... pero que diablos

//vamos a seleccionar los botones sobre los que vamos a ejecutar las acciones

const forwardbtn = document.getElementById('forward');
const rewindtbn = document.getElementById('back');
const autoRewindbtn = document.getElementById('autoback');
const autoForwardbtn = document.getElementById('autoforward');
const stopbtn = document.getElementById('stop');


//necesitamos saber la linea que vamos a modificar el nombre

let photoName = document.getElementById('img');
//photoName.innerText= `<img id="img" src="${fotos[0]}" class="rounded img-thumbnail" width="400px"></img>`

//creamos las formulas para que vaya cambiando el nombre del index de la foto
index = 0

function haciadelante() {
    if(index === fotos.length-1) {
       index=-1
    }
    index++;
    photoName.src= fotos[index]
  
}

function haciatras() {
    if(index === 0){
        index=fotos.length
    }
    index--;
    photoName.src= fotos[index]
}

//ahora la funcion para cortar todo los loops

let internalref = 0


function stopAll() {
    clearInterval(internalref)
}


//ahora solo queda asignar cada funcion a cada boton

forwardbtn.addEventListener('click', () => { //boton hacia adelante sin loop
    haciadelante()
})

rewindtbn.addEventListener('click', () => { //boton hacia atrás sin loop
    haciatras()
    
})

autoForwardbtn.addEventListener('click',()=>{ //boton hacia adelante con loop
    clearInterval(internalref)
    internalref=setInterval(haciadelante,2000)
})

autoRewindbtn.addEventListener('click',()=>{ //boton hacia atrás con loop
    clearInterval(internalref)
    internalref=setInterval(haciatras,2000)
})

stopbtn.addEventListener('click',()=>{ //boton stop, para cualquier loop que se esté ejecutando
    stopAll()
})


    


