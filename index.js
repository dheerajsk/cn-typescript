function submitForm() {
    var usernameInput = document.getElementById("username");
    if (usernameInput) {
        var username = usernameInput.value;
        if(username){
            alert("Username is " + username);
        }
        
        else {
            alert("No username");
        }
    }
    
}
