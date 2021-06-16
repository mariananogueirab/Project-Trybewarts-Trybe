<<<<<<< HEAD
// Requisito 3:
=======
>>>>>>> 851d4f2e9299b01d0075a1aa1b0b74502f4adf6d
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
