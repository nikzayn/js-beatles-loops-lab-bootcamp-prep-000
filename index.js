function theBeatlesPlay(musicians, instruments){
  var players = [];
  for(let i = 0; i < 4; i++){
    players.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return players;
}
function johnLennonFacts(facts){
  var newFacts = [];
  let i = 0;
  while(i < facts.length){
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}
function iLoveTheBeatles(num){
  var empty = [];
  do{
    let i = 0;
    console.log("I love the Beatles!");
    i++;
  }
  while(i <= 15)
  
}