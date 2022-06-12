function range(size, startAt = 0){
  return [...Array(size).keys()].map(i => + startAt);
}


function Guessgame(score,limit,){

  let number ;
  let game_no;

    // Tell User To Input Number
  number = prompt('Guess the number');
  number = parseInt(number)


  const temp_data = range(limit)
  game_no = Math.floor(Math.random() *
  temp_data.length)

  if(number !=game_no) {
   return console.log(`Wrong Guess, Your final score is ${score}`)
 }
 else {
   console.log("Correct, Next Level")
   limit++
   score++

           Guessgame(score,limit)
           
              }
  
}
Guessgame(0,2)