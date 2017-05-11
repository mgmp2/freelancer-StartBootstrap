

var lastScrollTop = 100;
var a = document.getElementsByClassName("menu-link");
window.addEventListener("load", function (e){
  e.preventDefault();
})
window.addEventListener("scroll", function(){
  var currentScroll = window.scrollY;
  if (currentScroll < 100) {
  document.getElementById("header").classList.remove("header-height");
} if (currentScroll > lastScrollTop){
  document.getElementById("header").classList.add("header-height");
  document.getElementById("li-portfolio").classList.remove("active");

} if( currentScroll >= 420 && currentScroll < 1160) {
      document.getElementById("li-portfolio").classList.add("active");
      document.getElementById("li-about").classList.remove("active");
} if(currentScroll >= 1160) {
  document.getElementById("li-about").classList.add("active");
  document.getElementById("li-portfolio").classList.remove("active");
  document.getElementById("li-contact").classList.remove("active");

} if (currentScroll >= 1540) {
  document.getElementById("li-contact").classList.add("active");
  document.getElementById("li-about").classList.remove("active");


}


   lastScrollTop = currentScroll;
});



var p = document.getElementsByClassName("port-imagen");
for(var i= 0 ; i< p.length; i++){
  p[i].addEventListener("click", screenSize);
  p[i].addEventListener("mouseover", function(){
    this.firstChild.classList.add("visible")
  });
  p[i].addEventListener("mouseout", function(){
    this.firstChild.classList.remove("visible")
  });
}

var row = document.getElementById("js-row");
var column = document.createElement("div");
function screenSize(){
  document.getElementById("modal").firstElementChild.classList.add("modal");
  document.getElementById("body").classList.add("overflow");
  // console.log(this.previousElementSibling);
  column.setAttribute("class", "col-12");
  column.appendChild(this.previousElementSibling);
  row.appendChild(column);

}

// document.getElementById("js-modal").addEventListener("click", function(e){
//   e.toggle("modal");
// });
