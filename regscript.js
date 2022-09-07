let userName=document.getElementById("staticUser");
let email=document.getElementById("staticEmail2");
let password=document.getElementById("inputPassword2");
let label=document.getElementsByTagName("label")

let valid=true;



validate=(e)=>{
    e.preventDefault();
   
    if(userName.value==""){
        label[0].innerHTML="User Name"+ "  "+'\'Required\'';
        label[0].style.color="red";

        console.log("hello");
        valid=false

    }
    else{
        label[0].innerHTML="User Name"
        label[0].style.color="black";
        localStorage.setItem("userName",userName.value)
        valid=true
    }
    if(email.value==""){
        label[1].innerHTML="Email"+ "  "+'\'Required\'';
        label[1].style.color="red"
        valid=false

    }
    else{
        label[1].innerHTML="Email"
        label[1].style.color="black";
        localStorage.setItem("Email",email.value)
        valid=true
    }
    if(password.value==""){
        label[2].innerHTML="Password"+ "  "+'\'Required\'';
        label[2].style.color="red"
        valid=false

    }
    else{
        label[2].innerHTML="Password"
        label[2].style.color="black";
        localStorage.setItem("Password",password.value)
        valid=true
    }
  
    return valid
}

