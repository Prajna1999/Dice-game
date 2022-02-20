const dicePlayerOne=document.querySelectorAll(".dice1");
const dicePlayerTwo=document.querySelectorAll(".dice2");
const btn=document.querySelector("#clickBtn");

// event listenners
btn.addEventListener("click", callback);

function callback(){
    let n1=Math.floor(Math.random()*6)+1;
    let n2=Math.floor(Math.random()*6)+1;

    removeActiveClasses();
    
    dicePlayerOne[n1-1].classList.add("active");
    dicePlayerTwo[n2-1].classList.add("active");

    console.log(n1, n2);
}

function removeActiveClasses(){
    dicePlayerOne.forEach(dice=>{
        dice.classList.remove("active");
    })
    dicePlayerTwo.forEach(dice=>dice.classList.remove("active"));
}



// function randomGenerator (){
//     var random= Math.floor(Math.random()*6)+1
//     return random;
// }
// random=randomGenerator() ;
// if (random===1){
    
// }
// else if(ramdom===2){

// }
// else if(ramdom===3){

// }
// else if(ramdom===4){

// }
// else if(ramdom===5){

// }
// else {

// }