let body = document.querySelector('body');
let btn = document.querySelector("button");
btn.addEventListener('click',()=>{ 
    let red = Math.floor(Math.random() * 256);
    let blue= Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    var randomColor = `rgb(${red}, ${green}, ${blue})`;
   document.body.style.backgroundColor = randomColor;
    return randomColor;
})



