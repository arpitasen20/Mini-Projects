var turn=0;
var arr_img=['<img src="image1.jpg" id="img1">','<img src="image2.jfif" id="img2">','<img src="image3.jfif" id="img3">','<img src="image4.jpg" id="img4">'];

setInterval(() => {
    for(var x=0;x<4;x++){
        if(x==turn){
            document.getElementById(turn).style.opacity='1';
        }
        else{
            document.getElementById(x).style.opacity='0.6';
        }
    }
}, 100);

function right(){
    if(turn==3){
        turn=0;
    }
    else{
        turn++;
    }
    document.getElementById('slide').innerHTML=document.getElementById('slide').innerHTML+arr_img[turn];
    document.getElementById('box').style.overflow='hidden';
    document.getElementById('slide').style.animation='move 5s ease forwards';

    setTimeout(() => {
        document.getElementById('slide').style.animation=null;
        document.getElementById('slide').innerHTML=arr_img[turn];
    }, 4999);

}

function left(){
    if(turn==0){
        turn=3;
    }
    else{
        turn--;
    }
    document.getElementById('slide').innerHTML=arr_img[turn]+document.getElementById('slide').innerHTML;
    document.getElementById('box').style.overflow='hidden';
    document.getElementById('slide').style.animation='move_left 5s ease forwards';

    setTimeout(() => {
        document.getElementById('slide').style.animation=null;
    }, 5000);
}


function btn(clicked_image){
    document.getElementById('slide').innerHTML=arr_img[clicked_image];
    for(var x=0;x<4;x++){
        document.querySelectorAll("button")[x].style.opacity='0.6';
    }
    document.getElementById(clicked_image.toString(10)).style.opacity='1';
}