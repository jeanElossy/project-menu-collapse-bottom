document.querySelector(".fa-chevron-down").addEventListener("click", collapse);
function collapse(){
  this.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].classList.toggle("collapse");
  this.classList.toggle("change__sens");
  
}