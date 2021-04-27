// define the input text box
let inputElement = document.querySelector("#input");
// define the output
let answerElement = document.querySelector("#answerId");

inputElement.addEventListener("keydown", function(event){
    console.log(inputElement.value);

    if (event.key == "Enter"){

        let items = inputElement.value;
        let result=" It's in ";
        // reset the text box with backspace
        inputElement.value = "";

        if (items == "books"){
            result+="bookshelf in the study";
        }else if(items == "textbooks"){
			result+="bookshelf in the twins’ rooms";
		}else if(items == "headphones"){
			result+="drawers in the study";
		}else if(items == "passport"){
			result+="drawer under the desk in the study";
		}else if(items == "key"){
			result+="basket in the sideboard";
		}else if(items == "glasses"){
			result+="white basket on the dresser";
		}else if(items == "important files"){
			result+="safe box";
		}else if(items =="old photos"){
			result+="storage room on the 3rd floor";
		}
		answerElement.innerHTML=result;
    }
})