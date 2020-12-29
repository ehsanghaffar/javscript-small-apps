// change background color with js 

const body = document.body;
const btn = document.getElementById('changeBtn');

const colors = ['red', 'yellow', 'green', 'blue'];

body.style.backgroundColor = 'red';

const changeBg = () => {

  body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

btn.addEventListener('click', changeBg);