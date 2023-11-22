let imagens = ['img/imgcar1.png', 'img/imgcar2.jpg', 'img/imgcar3.jpg', 'img/imgcar4.webp'];
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

slideShow();