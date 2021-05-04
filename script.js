// define the input text box
let inputElement = document.querySelector("#input");
// define the output
let answerElement = document.querySelector("#answerId");

inputElement.addEventListener("keydown", function(event){
    console.log(inputElement.value);

    if (event.key == "Enter"){

        let items = inputElement.value;
        let result= " It might be";
        // reset the text box with backspace
        inputElement.value = "";

        if (items.charAt(0) == "a"){
            result+=" on the bookshelf in the study.";
        }
		else if(items.charAt(0) == "b"){
			result+=" under the bed.";
		}
		else if(items.charAt(0) == "c"){
			result+=" in the drawers in the study.";
		}
		else if(items.charAt(0) == "d"){
			result+=" on the nightstand.";
		}
		else if(items.charAt(0) == "e"){
			result+=" inside the sideboard.";
		}
		else if(items.charAt(0) == "f"){
			result+=" on the shoe rack.";
		}
		else if(items.charAt(0) == "g"){
			result+=" in the safe box.";
		}
		else if(items.charAt(0) == "h"){
			result+=" in the storage room.";
		}
		else if(items.charAt(0) == "i"){
			result+=" on the dresser.";
		}
		else if(items.charAt(0) == "j"){
			result+=" in the closet in the bedroom.";
		}
		else if(items.charAt(0) == "k"){
			result+=" in the kitchen.";
		}
		else if(items.charAt(0) == "l"){
			result+=" around the sofa.";
		}
		else if(items.charAt(0) == "m"){
			result+=" in the firdge.";
		}
		else if(items.charAt(0) == "n"){
			result+=" under the pillow.";
		}
		else if(items.charAt(0) == "o"){
			result+=" in the trash bin.";
		}
		else if(items.charAt(0) == "p"){
			result+=" in the TV cabinet.";
		}
		else if(items.charAt(0) == "q"){
			result+=" in the car.";
		}
		else if(items.charAt(0) == "r"){
			result+=" near the window.";
		}
		else if(items.charAt(0) == "s"){
			result+=" in the wardorbe.";
		}
		else if(items.charAt(0) == "t"){
			result+=" in the closets in the basement.";
		}
		else if(items.charAt(0) == "u"){
			result+=" in the mirror cabinet in the bathroom.";
		}
		else if(items.charAt(0) == "v"){
			result+=" inside the quilt cover.";
		}
		else if(items.charAt(0) == "w"){
			result+=" in the pocket of your jacket.";
		}
		else if(items.charAt(0) == "x"){
			result+=" in one of your bags.";
		}
		else if(items.charAt(0) == "y"){
			result+=" under the rag.";
		}
		else if(items.charAt(0) == "z"){
			result+=" in the oven.";
		}
		answerElement.innerHTML=result;
    }
})