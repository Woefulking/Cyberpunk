let currentIndex = 0;
let hero = document.body.querySelector('.hero');
const width = document.documentElement.clientWidth;

function changeBackgroundImage() {
    hero.style.backgroundImage = `url(./images/bg-hero${currentIndex + 1}.png)`;
    currentIndex = (currentIndex + 1) % 3;
}

function changeGiveawayImage() {
    const img = document.querySelector('.giveaway__game-consoles img');

    if(width > 1024)  img.src = './images/Xbox_PS.png'

    if(width == 1024) img.src = './images/Xbox_PS_vertical.png'

    if(width == 320)  img.src = './images/Xbox_PS_gap.png'

}
  

function handleResizeAndLoad() {
    changeBackgroundImage();
    changeGiveawayImage();
}

window.addEventListener('resize', handleResizeAndLoad);
window.addEventListener('load', handleResizeAndLoad);

setInterval(changeBackgroundImage, 3000);