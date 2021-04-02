
let divContent = document.querySelector('div.jumbotron');
let donateBtn = document.querySelector('div.jumbotron .btn-primary')
let volunteerBtn = document.querySelector('div.jumbotron .btn-secondary')


const btnBlue = document.querySelector('#blueBtn');
const btnGreen = document.querySelector('#greenBtn');
const btnOrange = document.querySelector('#orangeBtn');


let tema = [
  { nombre: 'tema azul', jumbotron: '#588fbd', donate: '#ffa500', volunteerBG: 'black', volunteerColor: 'white' },
  { nombre: 'tema naranja', jumbotron: '#f0ad4e', donate: '#5751fd', volunteerBG: '#31b0d5', volunteerColor: 'white' },
  { nombre: 'tema verde', jumbotron: '#87ca8a', donate: 'black', volunteerBG: '#8c9c08', volunteerColor: 'black' },
]
let temaAzul = ['#588fbd', 'ffa500', 'black', 'white']



function cambiameeltemita(obj) {
divContent.style.backgroundColor = obj.jumbotron;
donateBtn.style.backgroundColor = obj.donate;
volunteerBtn.style.backgroundColor = obj.volunteerBG;
volunteerBtn.style.color = obj.volunteerColor;
}

btnBlue.addEventListener('click', () => cambiameeltemita(btnBlue, tema[0]));
btnOrange.addEventListener('click', () => cambiameeltemita(btnOrange, tema[1]));
btnGreen.addEventListener('click', (busc) => cambiameeltemita(busc.target, tema[2]));

[btnBlue,btnGreen,btnOrange] = btn.addEventListener('click', () => cambiameeltemita(btnBlue, tema[0]));

/****************************************************************************************************/

// debe tener algo cada casillero (Hint: their `value` length has to be greater than zero)
//mail debe de tener @
// si es invalido debe ponerse un background rojizo
// si todo es ok se dispara un alert con thanks for your filling out the form y limpiar todos los textos
//*Important hint:** In your function that handles clicks on the 
// `Submit` button you will need to call `event.preventDefault()` 
//to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault




function validateFields(event) {
  event.preventDefault();
  let isValid = true;
  let arrayOfFields = [emailField, yourNameField, describeYourselfField]
  //Limpiar todos los background color de los campos.
  arrayOfFields.forEach(field => field.style.backgroundColor = 'white')
  //Validar condiciones de los campos.
  if (!(emailField.value.length > 0 && emailField.value.includes('@'))) {
    emailField.style.backgroundColor = 'tomato';
    isValid = false;
  }
  if(!yourNameField.value.length > 0) {
    yourNameField.style.backgroundColor = 'tomato';
    isValid = false;
  }
  if(!describeYourselfField.value.length > 0) {
    describeYourselfField.style.backgroundColor = 'tomato';
    isValid = false;
  }
 //Verifica que todos los campos cumplen las condiciones 
 if(isValid) {
   alert('thank you for filling out the form');
   arrayOfFields.forEach(field => field.value = " ");
 }
}

submitBtn.addEventListener('click', validateFields);
