// add solution here
function theBeatlesPlay(musicians, instruments){
  var play = []
  
  for(let i = 0; i < musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return play;
}