let inputField = document.getElementsByClassName("forms2")
let cancelButton = document.getElementById("cancel-btn")
let submitButton = document.getElementById("send-btn")
let phoneInput = document.getElementById("phone")
let messageInput = document.getElementById("message")
let nameInput = document.getElementById("name")


cancelButton.addEventListener ("click", (ev) => {
    for (let i = 0; i < inputField.length; i++){
        inputField[i].value = "";
    }
})


submitButton.addEventListener ("click", (ev) => {
    for (let i = 0; i < inputField.length; i++){
        if ( inputField[i].value === ""){
            alert("all input boxes must be filled");
            return;
        }     
    }
    if (isNaN(phoneInput.value) || phoneInput.value.length != 11 ){
        alert("phone number field must only contain numbers");
        return;
    }
    if (messageInput.value.length > 100){
        alert("message field cannot have more than 100 characters")
        return;
    }
    alert ("Welcome " + nameInput.value)
})