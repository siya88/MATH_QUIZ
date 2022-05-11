 player1name=localStorage.getItem("p1")
 player2name=localStorage.getItem("p2")
 player1_score=0
 player2_score=0
 document.getElementById("player1name").innerHTML=player1name + ":"
 document.getElementById("player2name").innerHTML=player2name + ":"
 document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="question turn" + player1name
document.getElementById("player_answer").innerHTML="answer turn" + player2name

