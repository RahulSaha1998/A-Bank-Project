//step-1: add click event handler with event handler
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2: get the email address inside the email input field
    //always remember to use .value to get the text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
 
    //step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //Do not verify email password on the client site
    //step-4: verify email and password
    if(email === 'pk@gmail.com' && password === '1234'){
        window.location.href = 'bank.html';
    }
    else{
        alert('password vule gesos kemne vai??');
    }
})