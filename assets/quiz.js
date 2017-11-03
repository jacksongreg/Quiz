var answers = ["a","b","d","b","b","c","c","a","b","a"]
    tot = answers.length;
function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName );
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value;
}

var getScore = function(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1;
  return score;
}

function returnScore(){

 if (getScore() < 5) {alert("Your score is "+ getScore() +"/"+ tot + "you failed.");}

  else {alert("Your score is "+ getScore() +"/"+ tot + " you passed.");}
}
