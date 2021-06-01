var items = ["ROCK","PAPER","SCISSOR"];

$(document).ready(function(){

var winner = $('#accounceWinner');

function computerAns(txt){
  var result =  items[Math.floor(Math.random() * 10) % 3];
  $('#playerResult').html(txt);
  $('#computerResult').html(result);
  return result;
}

$('#rock_btn').click(function(){
var machAns = computerAns("ROCK");
switch(machAns){
  case "ROCK" : winner.html("You Tied!");break;
  case "PAPER": winner.html("Computer Won!");break;
  case "SCISSOR": winner.html("You Won!");
}
});

$('#paper_btn').click(function(){
  var machAns = computerAns("PAPER");
  switch(machAns){
    case "ROCK" : winner.html("You Won!");break;
    case "PAPER": winner.html("You Tied!");break;
    case "SCISSOR": winner.html("Computer Won!");
  }
});

$('#scissor_btn').click(function(){
  var machAns = computerAns("SCISSOR");
  switch(machAns){
    case "ROCK" : winner.html("Computer Won!");break;
    case "PAPER": winner.html("You Won!");break;
    case "SCISSOR": winner.html("You Tied!");
  }

});

$('#Refresh_Round').click(function(){
  $('#computerResult').text('0');
  $('#playerResult').text('0');
  $('#accounceWinner').text('No Winner');

});

});
