// let img = document.getElementsByClassName('img');
let img = document.getElementById('img');
let images=['img/пальма.jpg', 'img/world5.jpg', 'img/road.jpg','img/Hall1.png','img/Lake1.jpg'];
let posOfImage=0;

function slider(){
    if (posOfImage<images.length){
        posOfImage=posOfImage+1;
    }
    else{
        posOfImage=1;
    }
    img.innerHTML= "<img src="+images[posOfImage-1]+">";
}


setInterval(slider,3000);

