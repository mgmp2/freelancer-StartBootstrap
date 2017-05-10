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

document.getElementById("js-modal").addEventListener("click", function(e){
  e.toggle("modal");
});
