// Requisito 3:
const botao = document.querySelector('#botao-id');

botao.addEventListener('click', () => {
  const email = document.querySelector('#email-id').value;
  const senha = document.querySelector('#senha-id').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const divAvaliar = document.querySelector('#div-avaliation');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numbers.length; index += 1) {
  const divRadio = document.createElement('div');
  divAvaliar.appendChild(divRadio);
  divRadio.className = 'divNote';
  const label = document.createElement('label');
  label.innerText = numbers[index];
  divRadio.appendChild(label);
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'rate';
  radio.value = numbers[index];
  divRadio.appendChild(radio);
}

// Requisito 18:

const checkAgreement = document.querySelector('#agreement');

const botaoEnviar = document.querySelector('#submit-btn');
botaoEnviar.disabled = true;

checkAgreement.onclick = () => {
  botaoEnviar.disabled = false;
};

// Requisito 20:

const maxCaracteres = 500;
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textArea.addEventListener('input', () => {
  const caractereLength = maxCaracteres - textArea.value.length;
  counter.innerText = `${caractereLength} carácteres restantes`;
});

// Requisito 21:

/* const divFullname = document.querySelector('#fullName');
const divEmail = document.querySelector('#email');
const divHouse = document.querySelector('#house');
const divFamily = document.querySelector('#family');
const divMaterias = document.querySelector('#materias');
const divAvaliation = document.querySelector('#avaliation');
const divObs = document.querySelector('#obs');

const divDisplay = document.querySelector('.display');
console.log(divDisplay);

const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');

divFullname.innerText = `Nome: ${firstName.value} ${lastName.value}`;

botaoEnviar.addEventListener('click', () => {
  divDisplay.style.display = 'none';
  divFullname.style.display = 'flex';
}) */
