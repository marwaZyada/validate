let userName=document.getElementById("staticUser");
let email=document.getElementById("staticEmail2");
let password=document.getElementById("inputPassword2");
let form=document.querySelector("form");
let label=document.getElementsByTagName("label")





validate=(e)=>{
    let valid=true;
   
   
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
        // valid=(valid)?true:false
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
        // valid=(valid)?true:false
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
        // valid=(valid)?true:false
    }
    if(!valid){
        e.preventDefault()
    }

    
console.log(valid)

    return valid
}

form.addEventListener("submit",validate)