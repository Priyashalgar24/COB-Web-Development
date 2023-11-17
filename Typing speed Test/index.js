// (actualWords / total TimeTaken) * 60;

const typing_ground = document.querySelector('#textarea');
const button = document.querySelector('#button');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');


let startTime, endTime, totalTimeTaken;

const sentences = 
[ 
    'Iguanas were falling out of the trees',
    'There are few things better in life than a slice of pie',
    'Warm bear on a cold day is not my idea of fun',
    'Be carefull with that butter knife',
    'I want more detailed information',
]

//step 5


const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value;
    let actualWords = totalWords.split(' ').length;
    
    if(actualWords !== 0 ) {
        let typingSpeed = (actualWords / time_taken) * 60;
        console.log(typingSpeed);
        score.innerHTML = `Your typing speed is ${typingSpeed} words per minute. You wrote ${actualWords} words, and time taken ${time_taken} sec.`;
    }
};


//step 4

 const endTypingTest = () => {
    button.innerText = 'Start';
    
    let date = new Date();
    endTime = date.getTime();
 
    totalTimeTaken = (endTime - startTime) / 1000;
    //console.log(totaltimeTaken);

    calculateTypingSpeed(totalTimeTaken);

    showSentence.innerHTML = ' ';
    typing_ground.value = ' ';
 };


//step3

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
   // console.log(randomNumber);
   showSentence.innerHTML = sentences[randomNumber];

   let date = new Date();
   startTime = date.getTime();

   button.innerText = 'Done';
};



button.addEventListener('click',() => {
     switch (button.innerText.toLowerCase()) {

        case 'start':
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

            case 'done':
                typing_ground.setAttribute('disabled' ,'true');
                endTypingTest();
                break;
     }
});
