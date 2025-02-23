alert("is this working?")
let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')



let input = document.querySelector('#image_text')
input.disabled = true;


let image = new Image();
image.src = 'City.jpg';





image.addEventListener('load', () => {
    ctx.drawImage(image, 0, 0);
    input.disabled = false;
})

input.addEventListener ('input', function (){
    let text = this.value;

    ctx.drawImage(image, 0, 0);
    ctx.font = '40px Courier';
    ctx.fillStyle = 'blue';
    ctx.fillText(text, 30, 100)
})