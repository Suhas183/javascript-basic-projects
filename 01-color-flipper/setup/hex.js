const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let randCode = '#';
    for(let i = 0; i < 6; i++)
    {
        randCode +=  hex[Math.floor(Math.random()*hex.length)];
    }

    document.body.style.backgroundColor = randCode;
    color.textContent = randCode;
});
