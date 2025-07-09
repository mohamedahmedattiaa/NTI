let userinput = document.getElementById("input");
let btn       = document.getElementById("btn-clear")

userinput.addEventListener("keydown" , function(event){
    const key = event.key;

    if (key < '0' || key > '9') {
        event.preventDefault();
      }
    });

btn.addEventListener("click", function() {
      input.value = ""; 
    });