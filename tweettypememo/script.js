const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

editableInput.onkeyup = (e)=>{
    let element = e.target; //getting kepressed element
    checkInput(element); //calling function
}

editableInput.onkeypress = (e)=>{
    let element = e.target; //getting kepressed element
    checkInput(element); //calling function
    placeholder.style.display = "none"; 
}


function checkInput(element){
    let maxLength = 250;
    let currentLength = element.innerText.length; //getting text length of keypressd element
    let textTag = element.innerHTML;

    if(currentLength <= 0){ //if currentLenth is less than or equal to 0
    placeholder.style.display = "block"; 
    counter.style.display = "none";
    button.classList.remove("active");
    }else{
        counter.style.display = "block";
        placeholder.style.display = "none"; 
        button.classList.add("active");

    }
    counter.innerText = maxLength - currentLength;

    if(currentLength > maxLength){
        let overText = element.innerText.substr(maxLength); //extracting over texts
        overText = '<span class="highlight">${overText}</span>'; //creating new span and passing over texts
        textTag = element.innerText.substr(0, maxLength) + overText; //replacing innerHTML of editable div with new span over the texts
        readonlyInput.style.zIndex = "1";
        counter.style.color = "#e0245e";
        button.classList.remove("active");
    }else{
        readonlyInput.style.zIndex = "1";
        counter.style.color = "#333";
    }

        readonlyInput.innerHTML = textTag; //replacing innerHTML if readonly div with new span with over texts

        

}

  
   
        

