let cartCount = document.querySelector("#cartCount");
let count = 0;
let addButtons = document.querySelectorAll(".add")

for (let i = 0; i < addButtons.length; i++) {
   addButtons[i].addEventListener("click", function(){
    count++;
    cartCount.innerHTML = count;
  
})
    
}

