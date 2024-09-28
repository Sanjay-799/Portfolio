let nameEl=document.getElementById("name");
let emailEl=document.getElementById("email");
let messageEl=document.getElementById("message");
let nameErrMessEl=document.getElementById("nameErrMess");
let emailErrMessEl=document.getElementById("emailErrMess");


nameEl.addEventListener("blur",function(){
    if (nameEl.value===""){
        nameErrMessEl.textContent="required*";
        }
        else{
            nameErrMessEl.textContent="";
        }

    });
emailEl.addEventListener("blur",function(){
    if (emailEl.value===""){
        emailErrMessEl.textContent="required*";
    }else{
        emailErrMessEl.textContent="";
    }
});

let btnEl=document.getElementById("btnSubmit");
btnEl.addEventListener("click",function(){
    console.log("hello Sanjay");
});