var imageStart = 0; 
var images = ['imgs/aventadorsv.jpg', 'imgs/bugatti.jpg', 'imgs/huracan.jpg', 'imgs/veyron.jpg'];
var pause = 3000;

images[0] = 'imgs/aventadorsv.jpg';
images[1] = 'imgs/bugatti.jpg';
images[2] = 'imgs/huracan.jpg';
images[3] = 'imgs/veyron.jpg';

function slidesImage(){
    document.slides.src = images[imageStart];

    if(imageStart < images.length - 1){
        imageStart++;
    }else {
        imageStart = 0;
    }

    setTimeout("slidesImage()", pause);
}

window.onload = slidesImage();