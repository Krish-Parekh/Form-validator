const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    document.body.style.background = "#e74c3c";
    
}
//success message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    document.body.style.background = "#2ecc71"
}
// check email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,"Email is not valid");
    }
}
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}
//check password
function checkPasswordMatch(input1,input2){
    if(input1.value != input2.value){
        showError(input2,'Passwords do not match');
    }
}
// Get fieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event listner
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,Cpassword]);
    checkEmail(email);
    
    
});