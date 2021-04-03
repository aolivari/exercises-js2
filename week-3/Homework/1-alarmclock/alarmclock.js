/*

cuando ponga set alarm tienen que pasar dos cosas:
1- el numero puesto en input el titulo tiene que cambiar a Tiempo Restante 00:10
2- cada segundo que pase el el titulo debe de bajar un segundo

cuando el titulo diga Tiempo Restante 00:00 la alarma debe tocar un sonido. puedes hacer que esto 
pase usando playAlarm()

puedes parar la alarma presionando  Stop Alarm btn

*/
let interval = 0
function setAlarm() {
  clearInterval(interval)
  let contador = 0 // necesitamos esto para ejecutar la cuenta regresiva de manera correct
  let tiempoRestante = document.getElementById('alarmSet')//necesitamos definir cual es valor que vamos a poner en time remaini...
  let tiempoRestante1 =tiempoRestante.value - contador //ahora a este valor le tenemos que restar el contador (por ejemplo 10-1=9)
  let conteo = document.getElementById('timeRemaining')//tenemos que intervenir ahora el time reamining
  interval = setInterval(countdown,1000)//esto es lo que hace que countdown se repita cada mil milisecundos (1sg)
  function countdown() {//vamos a empezar a crear el loop
      contador++;//al contador le vamos a sumar 1 por cada vuelta
      cuentaRegresiva = tiempoRestante1 - contador
      conteo.innerText =`Time Remaining: ${cuentaRegresiva} sec`//aqui definimos todo... 10-1=9 10-2=8
      if (cuentaRegresiva === 0){
        playAlarm()//cuando llegue a zero play the sound
        clearInterval(interval)//aqui paramos el loop
      }
      
  }
      
      
      
      
      
      //cambiar el tema cada 1 segundo cuando llegue a zero
      //poner el tema normal cuando stop alarm

  

  

}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
  
}

function pauseAlarm() {
  audio.pause();

}

window.onload = setup;
