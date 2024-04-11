const containerEl = document.querySelector(".container");
const carrer = ["youtuber", "web developer", "student", "Instructor"];
let carrerIndx = 0;
let characterIndx = 0;

updateText();
function updateText(){
    characterIndx++;
    containerEl.innerHTML = ` <h1>This is ${carrer[carrerIndx].slice(0,1) === 'I' ? "an" : "a"}  ${carrer[carrerIndx].slice(0,characterIndx)}</h1>
    `;

    if(characterIndx === carrer[carrerIndx].length){
        carrerIndx++;
        characterIndx = 0;
    }
    if(carrerIndx === carrer.length){
        carrerIndx = 0;
    }
    setTimeout(updateText,200);
}
