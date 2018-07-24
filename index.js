// add solution here
function theBeatlesPlay(musicians, instruments){
  var play = []
  
  for(let i = 0; i < musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return play;
}

function johnLennonFacts(facts){
  var new_facts = []
  
  while(facts.length > 0){
    new_facts.push(facts.shift() + '!!!')
  }
  return new_facts;
}