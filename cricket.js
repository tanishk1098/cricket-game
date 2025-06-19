let scoreStr= localStorage.getItem('Score');//retrieving the score from local storage
let score;//NOW REFRESH BUTTON WILL NOT AFFECT OUR ALERT MSG ALSO
resetScore(scoreStr);//initialises score object; if score exists, retrieves the score from local storage, if not then score is win, tie , lost :0,0,0
//it(calling fxn 4) also ensure score to be saved if page refreshed
//FUNCTION 4-->
function resetScore(scoreStr){ 
    if(scoreStr){//means if scoreStr is defined-->not null and not undefined
        score=JSON.parse(scoreStr);}
else{//when scoreStr is null/undefined
score={
    win: 0,
    lost: 0,
    tie: 0,};} //can also use ternary operator here -->
// score = JSON.parse(scoreStr)|| {win:0,
//     lost:0, tie:0,
// }
 score.displayScore = function(){//another of defining a method
         return `WIN: ${score.win}, LOST: ${score.lost}, TIE:${score.tie}` };
localStorage.setItem('Score',JSON.stringify(score));//give back updated score to local storage
        showResult();
}
//FUNCTION 1-->
   function generateComputerChoice(choice){ 
   let randomNumber = Math.random()*3;//Math.random gives a no. between 0 and 1, so range of math.random * 3 will be from 0 to 3-->
if(randomNumber>=0 && randomNumber<1){ choice ='BAT';}
else if (randomNumber<2 && randomNumber>=1 ){ choice ='BALL';}
else if(randomNumber>=2 && randomNumber<3){ choice ='STUMP';}
return choice;
    }
//FUNCTION 2-->
    function giveFinalDecision(userMove,computerMove){
        let resultMessage;
        if(userMove==='BAT'){if(computerMove=== 'BAT'){resultMessage='IT IS A TIE'; score.tie++;}
else if(computerMove==='BALL'){resultMessage='YOU WON'; score.win++;}
else if(computerMove==='STUMP'){resultMessage='COMPUTER WON';score.lost++;}
return resultMessage;
}
        else if(userMove==='BALL'){ if(computerMove=== 'BAT'){resultMessage='COMPUTER WON';score.lost++;}
else if(computerMove==='BALL'){resultMessage='IT IS A TIE'; score.tie++;}
else if(computerMove==='STUMP'){resultMessage='YOU WON';score.win++;}
return resultMessage;
}
else if (userMove==='STUMP'){if(computerMove=== 'BAT'){resultMessage='YOU WON';score.win++;}
else if(computerMove==='BALL'){resultMessage='COMPUTER WON';score.lost++;}
else if(computerMove==='STUMP'){resultMessage='IT IS A TIE'; score.tie++;}
return resultMessage;
}
}//FUNCTION 3--> 

function showResult(userMove,computerMove,resultMessage){ 
    document.querySelector('#user-move').innerText = userMove ? `YOU HAVE CHOSEN TO ${userMove}` : '';//used a ternary operator here
    document.querySelector('#computer-move').innerText = computerMove ? `COMPUTER CHOICE IS ${computerMove}` : '';
    document.querySelector('#result').innerText = resultMessage ? `RESULT : ${resultMessage}` : '';
    document.querySelector('#score').innerText = score ? `SCORE : ${score.displayScore()}` : '';
     localStorage.setItem('Score',JSON.stringify(score));//to store score in application , as key value pair(even when the page is refreshed)

}