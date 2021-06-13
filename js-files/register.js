window.onload=pageLoad;
function pageLoad(){
var registerForm = document.getElementById("registerForm");
registerForm.onsubmit= validate;
}
function validate(){
    var check = true;
    var mail = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
        alert("Email is Not Valid");
        check= false;
    }else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
        alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
        check= false;
    }else if(password.charAt(0)!==password.charAt(0).toUpperCase()){
        alert("Your Password must start with an uppercase character");  
        check= false;
      }
    return check;
}
      
