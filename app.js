
 
/*const randomNumber = Math.floor(Math.random() * 6);

const userQuestion = prompt("Ask me a question:");

let response;
switch (randomNumber) {
  case 0:
    response = "That's a great question!";
    break;
  case 1:
    response = "I'm not sure, what do you think?";
    break;
  case 2:
    response = "Interesting question! Let me think...";
    break;
  case 3:
    response = "I have a feeling you already know the answer!";
    break;
  case 4:
    response = "I'll need some time to ponder on that one.";
    break;
  case 5:
    response = "I'm afraid I don't have an answer for that.";
    break;
  default:
    response = "Something went wrong.";
}

const finalResponse = `You asked: ${userQuestion}\nMy response: ${response}`;

console.log(finalResponse);*/
/* let prize =prompt("select a number between 0 and 10")
prize=Number(prize);
let outputmessage = "My Selection";
let prizeMessage;
switch (prize){
 case 0: 
 prizeMessage="you won a watch";
 break;
 case  1:
 prizeMessage="Try agin"  
 case 2 :
prizeMessage= "you have won a fooball game ticket! Enjoyy your day" ;
break;
case 3 :
case 4 :
prizeMessage= "Congrulations you have a won a car";
break;
case 5 :
case 6:
prizeMessage= "Better luck next time";
break;
case 7:
case 8:
prizeMessage="Incredible! You've won a shopping spree!";
break;
case 9:
case 10:
prize="Jackpot! You are the lucky winner of a brand new car!";
break;
default:
    prizeMessage = "Sorry, invalid selection. No prize this time.";
}
console.log(outputmessage + prizeMessage);*/
 
  const choices = ["Rock , Paper , Scissors"];
 const playerIndex = Math.floor(Math.random() *3);
 const computerIndex = Math.floor(Math.random() *3);
 let resultMessage ;
 if (playerIndex === computerIndex){
   resultMessage = "Its a tie";
 } else {
  if (
    (playerIndex===0 && computerIndex===2 )||
    (playerIndex===1 && computerIndex===1)||
    (playerIndex===2 && computerIndex===0)
  ){
  resultMessage = " you Win!";
 } else {
  resultMessage = " Computer Win!";
 }
}
 console.log('playerchose ${ choices[playerIndex]}');
 console.log('computerchose $ {choices[computerIndex]}');
console.log( resultMessage);