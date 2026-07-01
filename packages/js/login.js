
const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click', function(){
 if(pass_field.type === "password"){
   pass_field.type = "text";
   showBtn.textContent = "HIDE";
   showBtn.style.color = "#3498db";
 }else{
   pass_field.type = "password";
   showBtn.textContent = "SHOW";
   showBtn.style.color = "#222";
 }
});
const attemp=3;
function validate(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
   if(username =="mwisemarierose@gmail.com" && password == 12345){
      
      Window.location.href = form.getAttribute("action");
     
     return false;
   }
    attemp--;
    alert("you have left "+attemp+"attemp;");
    if(attemp==0){
       document.getElementById("username").disabled= true;
       document.getElementById("password").disabled= true;
     document.getElementById("submitt").disabled= true;
      return false;
    }
   }