// $(function(){
//     $('.banner_sec').height($(window).height());
// });
window.onscroll=function(){
    if(window.scrollY>50)
    {
        document.getElementById("header_sec").classList.add("header_hover");
        document.getElementById("header_sec").classList.remove("header");
    }
    else
    {
        document.getElementById("header_sec").classList.remove("header_hover");
        document.getElementById("header_sec").classList.add("header");
    }
}
// function resize(x){
//     // let wid=$(document).width();
//     // let list=document.getElementById("nav-ul");
//     // let nav_icon=document.getElementById('nav');
//     // let new_icon=`
//     //     <i class="fas fa-bars nav-icon"></i>
//     // `;
//     // if(wid<991)
//     // {
//     //     list.remove();
//     //     $('<i class="fas fa-bars nav-icon"></i>').appendTo("nav");
//     // }
//     // let wid=$(document).width();
//     let list=document.getElementById("nav-ul");
//     let icon=document.getElementById('icon');
//     let new_icon=`
//         <i id="icon" class="fas fa-bars nav-icon"></i>
//     `;
//     if(x.matches)
//     {
//         list.remove();
//         $('<i class="fas fa-bars nav-icon"></i>').appendTo("nav");
//     }
//     else{
//         icon.remove();
//         $('nav-ul').appendTo("nav");
//     }
// } 

// var x = window.matchMedia("(max-width: 1200px)")
// resize(x) // Call listener function at run time
// x.addListener(resize)


    
