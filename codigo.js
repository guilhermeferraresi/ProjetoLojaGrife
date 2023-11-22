let imagens = [];
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