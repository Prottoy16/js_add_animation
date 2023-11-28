for(var i=0;i<3;i++){
    document.querySelectorAll(".button")[i].addEventListener("keypress",function(event){
        var x=event.key;
        Animation(x);
    });

}
   



function Animation(x){
 
    var selected=document.querySelector("."+x);
    selected.classList.add("animation");
    setTimeout(function(x){
      selected.classList.remove("animation");
    },1000);
}