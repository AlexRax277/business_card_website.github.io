import Matrix from "./Matrix.js";

const btn = document.querySelector('.glow-on-hover')
btn.addEventListener('click', () => {window.location.href='https://github.com/AlexRax277/AlexRax277/blob/main/CV.pdf'})

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const fontSize = 16;
context.font = `${fontSize}px Times New Roman`;

const data = [];

for (let i = 0; i < canvas.width/fontSize; i++) {
    data.push(new Matrix(i * fontSize, fontSize, canvas.height, context))
};

function ani() {
    context.fillStyle = "rgba(240, 248, 255, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'lightgrey';
    data.forEach(column => column.symbolMotion());
    setTimeout(() => requestAnimationFrame(ani), 50)
}

ani(); 
