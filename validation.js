function check(event){
    event.preventDefault();
    var email1=document.getElementById('mail');
    var email2="sankey901@solutions.com";
    var passd1=document.getElementById('pswd');
    var passd2="mindset";
        if(email1.value == email2 && passd1.value==passd2){
            window.location.replace("/welcome.html");
        } 
        if(email1.value == email2 && passd1.value!=passd2){
            error.textContent = "Invalid password";
            error.style.color = "red";
            error.style.marginTop="10px";
            error.style.fontSize="1.3rem";
            error.style.fontWeight="400px";
            return true;
        }
        else{
            error.textContent = "Invalid username/email";
            error.style.color = "red";
            error.style.marginTop="10px";
            error.style.fontSize="1.3rem";
            error.style.fontWeight="400px";
            return false;
        }
        


}