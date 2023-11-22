let imagens = ['./img/imgcar1.png', './img/im1.png'];
let index = 0;
let time = 2000;

function slideShow(){
    document.getElementById('carrocel').src = imagens[index];
     
    index++;

    if(index == imagens.length){
        index = 0;
    }

    setTimeout('slideShow()', time);
}