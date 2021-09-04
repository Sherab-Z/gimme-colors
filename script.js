function generateRandomHSLColor () {
    const hue = Math.floor(Math.random() * 361);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 101);

    const randomColor = 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';

    return randomColor;
}


function insertRandomBackgroundColor () {

    document.body.style.backgroundColor = generateRandomHSLColor(); 
}

const btn = document.getElementById('btn');
btn.addEventListener("click", insertRandomBackgroundColor, false);