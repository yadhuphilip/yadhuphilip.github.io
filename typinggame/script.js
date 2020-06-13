const api_url_random_quote = "https://api.quotable.io/random";
const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");

const timer = document.getElementById("timer");


function RandomQuoteGenerator(){
    return fetch(api_url_random_quote)
    .then(response => response.json())
    .then(data =>data)
}

async function mainGenerator(){
    const quote = await RandomQuoteGenerator();
    quoteDisplay.innerText = "";
    quoteInput.value = null;
    quote.content.split('').forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplay.appendChild(characterSpan)
    })

    startTimer();
    //console.log(quote.content )
}

quoteInput.addEventListener("input", ()=>{
    const lsofquotes = quoteDisplay.querySelectorAll('span');
    const lsofinputs = quoteInput.value.split('');
    lsofquotes.forEach((orgchar, index) =>{
        const inchar = lsofinputs[index];
        
        if (inchar == null){
            orgchar.classList.remove("correct");
            orgchar.classList.remove("incorrect");
            flag = false;
        }
        else if(inchar === orgchar.innerText){
            orgchar.classList.add("correct");
            orgchar.classList.remove("incorrect");
            flag=true;
        }
        else{
            orgchar.classList.remove("correct");
            orgchar.classList.add("incorrect");
            flag = false;
        }
    })
    if (flag){
        mainGenerator();
    }
    //console.log();
})

let startTime
function startTimer(){
    timer.innerText = 0;
    startTime = new Date()
    setInterval(()=>{
    timer.innerText = getTimerTime();
    },1000)

}
function getTimerTime(){
    return Math.floor((new Date() -startTime)/1000)
}
mainGenerator();