//frequently asked questions

const faqheaders=document.querySelectorAll(".faq-container .faq-header")
faqheaders.forEach((headers,i)=>{
    headers.addEventListener("click",() =>{
        headers.nextElementSibling.classList.toggle("active")
    })
    const open=document.querySelector(".open")
    const close=document.querySelector(".close")
    if(headers.nextElementSibling.classList.contains("active")){
        open.classList.remove("active");
        close.classList.add("active");
    }
    else{
        open.classList.add("active");
        close.classList.remove("active");
    }
})

//hamburger menu
const hamburger=document.querySelector(".hamburger")
//const closeMenu=document.querySelector(".closeMenu")
const menu=document.querySelector(".nav-menu")
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active")
    //closeMenu.classList.toggle("inactive")
})

//form validation

function formValidation(){

    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var subject=document.getElementById("subject").value
    var message=document.getElementById("message").value
   
    var regex=  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
   // var regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name.length < 3) {
        document.getElementById("name").focus();
        document.getElementById("name").style = "border:1px solid red";
        document.getElementById("nameContent").innerHTML = "This Field is required.";
        document.getElementById("nameContent").style = "color :red";
        return false;

    }
    else {
        document.getElementById("name").style = 'border: 1px solid black';
        document.getElementById("nameContent").style = 'display: none';
    }
    
    if (email.length < 3) {
        document.getElementById("email").focus();
        document.getElementById("email").style = "border:1px solid red";
        document.getElementById("emailContent").innerHTML = "This Field is required.";
        document.getElementById("emailContent").style = "color :red";
        return false;
        

    }
    else {
        document.getElementById("email").style = 'border: 1px solid black';
        document.getElementById("emailContent").style = 'display: none';
    }
   
   
    if (subject.length < 3) {
        document.getElementById("subject").focus();
        document.getElementById("subject").style = "border:1px solid red";
        document.getElementById("subjectContent").innerHTML = "This Field is required.";
        document.getElementById("subjectContent").style = "color :red";
        return false;

    }
    else {
        document.getElementById("subject").style = 'border: 1px solid black';
        document.getElementById("subjectContent").style = 'display: none';
    }
    if (message.length < 3) {
        document.getElementById("message").focus();
        document.getElementById("message").style = "border:1px solid red";
        document.getElementById("messageContent").innerHTML = "This Field is required.";
        document.getElementById("messageContent").style = "color :red";
        return false;

    }
    else {
        document.getElementById("message").style = 'border: 1px solid black';
        document.getElementById("messageContent").style = 'display: none';
    }
    
    var allvalue=name=email=subject=message=true;
    if(allvalue== true){
        document.getElementById("formSubmission").innerHTML="Thanks for contacting us!We will be in touch with you shortly."

        return true;
    }
    // if(regex.test(email)){
    //     document.getElementById("email").focus();
      
    //     document.getElementById("email").style = "border:1px solid red";
    
    //     document.getElementById("emailContent").style = 'display: none';
    //     return true;

    // }
    // else {
    //     document.getElementById("email").focus();
    //     document.getElementById("email").style = 'border: 1px solid black';
    //     document.getElementById("emailContent").innerHTML = "Enter the valid email address";
    //     document.getElementById("emailContent").style = "color :red";
    //     return false;
  
    // }
}