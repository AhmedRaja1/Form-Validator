const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password2");
const message = document.getElementById("message");



form.addEventListener('submit', function(e){
    e.preventDefault();

    if (username.value === "")
        alert("Please enter a username");
    
    else if (email.value === "")
        alert("Please enter a valid email");
            
    else if (phone.value === "")
        alert("Please enter a valid phone number");
    
    else if (password.value === "")
        alert("Please enter a password");
    
    else if (passwordConfirmation.value === "")
        alert("Please re-enter your password");

    else if (passwordConfirmation.value !== password.value)
        alert("Please enter correct passwords, passwords confirmation mismatch!");
        
    else if (message.value === "")
        alert("Please enter a message!");

    else
        alert('You are good to go, Form has been saved!')

    
});