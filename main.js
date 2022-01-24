// slider trượt
const slider_element =document.querySelectorAll('.slider-main .slider-element');
const slider_main = document.querySelector('.slider-main');
const img= document.querySelectorAll('.img');
const prev_slider = document.querySelector('.next-slider-left');
const next_slider = document.querySelector('.next-slider-right');
const nav_menu= document.querySelector('.nav-menu');
const element_width = slider_element[0].offsetWidth;
const element_length = slider_element.length;
const slider_body= document.querySelector('.slider-body');
const slider_body_width= slider_body.offsetWidth;
let position=0;
let index=0;
var x,y,ismove=false;
// var kt=true;
var run_number;
// mobile menu
function menu_mobile(){
    var is_menu=true;
    const overlay= document.querySelector('.overlay');
    const menu_main= document.querySelector('.menu-main-mobile');
    const task_search= document.querySelector('.task-search');
    const btn_search= document.querySelector('.search-mobile');
    // let menu_kind_mobile= document.querySelectorAll('.select-bar-mobile');
    nav_menu.addEventListener('click',function(e){
        if(is_menu==true){
                menu_main.style='transform: TranslateX(0)';
                nav_menu.style='transform: TranslateX(515%)';
                overlay.style='display:block';
                is_menu=false;
             }
        else{
                menu_main.style='transform: TranslateX(-100%)';
                nav_menu.style='transform: TranslateX(0)';
                overlay.style='display:none';
                is_menu=true;
            }
        })
    overlay.addEventListener('click', function(e) {
        menu_main.style='transform: TranslateX(-100%)';
                nav_menu.style='transform: TranslateX(0)';
                overlay.style='display:none';
                is_menu=true;
    })
    function select_bar(){
        var menu_kind_item=document.querySelectorAll('.menu-kind-mobile .menu-kind-item');
        let menu_kind_mobile= document.querySelectorAll('.menu-kind-mobile');
        menu_kind_mobile.forEach(function(kind,index) {
            var kt=true;
            kind.onclick = function() {
                if(kt) {
                    menu_kind_item.forEach(function(value){
                        value.style.display='none';
                    })
                    menu_kind_item[index].style.display='block';
                    kt=false;
                    
                }
                else{
                    menu_kind_item[index].style.display='none';
                    kt=true;
                }
            }
        })

    }
    select_bar();
    btn_search.onclick=function(){
        task_search.style.display='block';
        overlay.style.display='block';
        overlay.onclick=function(){
            task_search.style.display='none';
        }
    }
}
menu_mobile();
// slider full
function kiemtrapixel(){
    for(let i=0;i<=5;i++){
        position=element_width*i;
        if(position/slider_body_width >=1){
            // console.log(position/slider_body_width);
            break;
        }
    }
    run_number = Math.ceil((slider_element[0].offsetWidth*element_length)/position -1);
    position-=1;
}
kiemtrapixel();
 function slider(){
    if(index<0||index>run_number){
        index=0;
    }
    slider_main.style.transform=`translateX(${-position*index}px)`;
    index++;
 }
function run_slider(mode){
    if(mode==1){
        slider();
    }
    else if(mode==2){
        index-=2;
        slider();
    }
}
function slider_full(){
    slider();
    setTimeout(slider_full,5000);
}
// slider_full();
function slider_click() {
    next_slider.addEventListener('click',function(e) {
        run_slider(1)
    });
    prev_slider.addEventListener('click',function(e) {
        run_slider(2);
    });
}
slider_click();
slider_body.onmousemove = function(e){
    var abc=e.clientX;
    if(ismove==true){
        if(x<e.clientX){
            slider_main.style.transform=`translateX(${-position*index+(abc-x)}px)`;
        }
        else if(x>e.clientX){
            slider_main.style.transform=`translateX(${-position*index+(abc-x)}px)`;
        }
    }
}
slider_body.onmousedown = function(e){
    x=e.clientX;
    ismove=true;
    console.log("mousedown")
}
window.onmouseup = function(e){
    if(ismove==true){
        ismove=false;
       console.log("slider_body.onmouseup");
    }
}
// console.dir(slider_main)
img.forEach(function(value){
    value.ondragstart=function(e){return false};
})
slider_body.ontouchstart=function(e){
    ismove=true;
    x=Math.floor(e.touches[0].clientX);
}
slider_body.ontouchmove=function(e){
    // var abc=Math.floor(e.touches[0].clientX);
    if(ismove==true){
        if(x<e.touches[0].clientX){
            slider_main.style.transform=`translateX(${-position*index-(e.touches[0].clientX-x)}px)`;
            console.log(e.touches[0].clientX-x);
        }
        else if(x>e.touches[0].clientX){
            slider_main.style.transform=`translateX(${-position*index+(x-e.touches[0].clientX)}px)`;
        }
    }
}