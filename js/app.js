window.addEventListener("load", function(e){
  e.preventDefault();

})
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

function screenSize(){
  document.getElementById("modal").firstElementChild.classList.add("modal");
  console.log(this.previousElementSibling);
}
