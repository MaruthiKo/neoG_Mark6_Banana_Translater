const btn = document.querySelector(".btn-translate");
const txtArea = document.querySelector("#textarea-input");
const outputTxtArea = document.querySelector("#textarea-output");




// translates text when button is pressed
btn.addEventListener("click",() => {
    // console.log(txtArea.value);
    // outputTxtArea.innerText = "Let's try to translate";
    // console.log(outputTxtArea.value);
     fetch(constructUrl(txtArea.value))
    .then(response => response.json())
    .then(json => outputTxtArea.innerText = json.contents.translated)
    .catch(errorHandler);
});

let constructUrl = (text) => `https://api.funtranslations.com/translate/minion.json?text=${text}`

let errorHandler = (error) => console.log("too many requests wait for some time" + error)









