import Matrix from "./Matrix.js";

const fullstack_btn = document.getElementById('Fullstack-button');
fullstack_btn.addEventListener('click', () => {window.location.href='https://github.com/AlexRax277/AlexRax277/blob/main/CV_RakovchenAV.pdf'});
const frontend_btn = document.getElementById('Frontend-button');
frontend_btn.addEventListener('click', () => {window.location.href='https://github.com/AlexRax277/AlexRax277/blob/main/CV_RakovchenAV-frontend.pdf'});

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const fontSize = 14;
context.font = `${fontSize}px Roboto`;

const data = [];

for (let i = 0; i < canvas.width/fontSize; i++) {
    data.push(new Matrix(i * fontSize, fontSize, canvas.height, context))
};

function ani() {
    context.fillStyle = '#D1E8E2';
    context.fillRect(0, 0, canvas.width, canvas.height);
    // context.fillStyle = '#FDF8F0'; //падающие символы
    data.forEach(column => column.symbolMotion());
    setTimeout(() => requestAnimationFrame(ani), 105)
}

ani(); 
