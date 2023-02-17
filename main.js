let typing_ground = document.getElementById("textarea");
let btn = document.getElementById("btn");
let score = document.getElementById("score");
let showSentence = document.getElementById("showSentence");

let startTime, endTime, totalTimeTaken;
// const sentence = [
//     'The quick brown fox jumps over the lazy dog 1', 
//     'The quick brown fox jumps over the lazy dog 2', 
//     'The quick brown fox jumps over the lazy dog 3'
// ];

const startTyping = () =>{
    // let randomNumber = Math.floor(Math.random() * sentence.length);
    // showSentence.innerHTML = sentence[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    score.innerText = "";
}

const endTyping = () =>{
    btn.innerText = "Start";
    let date = new Date();
    endTime = date.getTime();    
    totalTimeTaken = (endTime - startTime) / 1000;
    calculateTypingSpeed(totalTimeTaken);
    // showSentence.innerText = "";
    typing_ground.value = "";
}

const calculateTypingSpeed = (totalTime) =>{
    let totalWords = typing_ground.value.trim();
    let actutalWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actutalWords !== 0){
        let typingSpeed = (actutalWords / totalTime) * 60;
        typingSpeed = Math.round(typingSpeed);
        score.innerHTML = `Your typing speed is ${typingSpeed} words per minutes and you wrote ${actutalWords} words and time taken in seconds ${totalTime}`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes and time taken ${totalTime} seconds`;
    }
}

btn.addEventListener('click', ()=>{
    switch(btn.innerText.toLowerCase()){
        case "start":
            typing_ground.removeAttribute("disabled");
            startTyping();
            break;
        case "done":
            typing_ground.setAttribute("disabled", true);
            endTyping();
            break;
    }
})