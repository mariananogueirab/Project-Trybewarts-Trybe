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
