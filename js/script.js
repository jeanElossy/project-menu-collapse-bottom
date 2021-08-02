document.querySelector(".fa-chevron-down").addEventListener("click", collapse);
function collapse(){
  this.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].style.transform = "translateY(30px)";
  this.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].style.visibility = "visible";
  
}