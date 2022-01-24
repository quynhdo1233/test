const navbar_main=document.querySelectorAll('.select-bar');
const menu_kind=document.querySelector('.menu-kind');
const log=document.querySelectorAll('.log');
const body_sub_item=document.querySelectorAll('.item-des');
const item_trend=document.querySelectorAll('.item-trend');
 log.forEach(function(value){
     value.onmouseover=function(e){
         value.style.opacity='0.8'
     }
     value.onmouseout=function(e){
        value.style.opacity='1'
    }
 })
body_sub_item.forEach(function(value,index){
    if(index%2==1){
        value.style='background-color:rgba(0, 0, 0, 0.2)';
    }
})
item_trend.forEach(function(value,index){
    if(index%2==1){
        value.style='background-color:rgba(0, 0, 0, 0.2)';
    }
})
// slider run 1 element và run ngc
// function slider(){
//         position=element_width*index;
//         slider_main.style=`transform: translateX(${-position}px)`;
//         if(kt==true){
//             index++;
//         }
//         else{
//             index--;
//         }
//         if(index>=element_length-4||index<0){
//             if(index<0){
//                 index=0;
//                 kt=true;
//             }
//             else{
//                 index=element_length-5;
//                 kt=false;
//             }
//         }
//     }
//     function run_slider(mode){
//        if(mode==1){
//            kt=true;
//             slider();
//        }
//        else if(mode==2){
//            kt=true;
//            index=index-2;
//            if(index<0){
//                index=0;
//            }
//            slider();
//        }
//     }
//     function slider_auto() {
//         slider();
//         setTimeout(slider_auto,4000);
//     }
//     // slider_auto();
//     function slider_click() {
//         next_slider.addEventListener('click',function(e) {
//             run_slider(1)
//         });
//         prev_slider.addEventListener('click',function(e) {
//             run_slider(2);
//         });
//     }
//     slider_click();
