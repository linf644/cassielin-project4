// define the input text box
let inputElement = document.querySelector("#input");

inputElement.addEventListener("keydown", function(event){
    console.log(inputElement.value);

    if (event.key == "enter"){

        let items = inputElement.value;
        // reset the text box with backspace
        inputElement.value = "";

        if (items = "book"){
            
        }
    }
})