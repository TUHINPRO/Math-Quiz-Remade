player_1name=localStorage.getItem("player_1name");
player_2name=localStorage.getItem("player_2name");

player_score=0;
player2_score=0;

document.getElementById("player_1name").innerHTML=player_1name+":";
document.getElementById("player_2name").innerHTML=player_2name+":";

document.getElementById("player_score").innerHTML=player_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn -"+ player_1name;
document.getElementById("player_answer").innerHTML="Answer Turn -" + player_2name;

function send() {
Number_1=document.getElementById("number_1").value;
Number_2=document.getElementById("number_2").value;
actualanswer=parseInt(Number_1)*parseInt(Number_2);
question="<h4>"+Number_1+" X "+ Number_2+ "</h4>";
inputbox="<br>answer: <input type='text' id='user_answer'>";
button="<br><br><button class='btn btn-info' onclick='anyFunction()'> CHECK </button>"


row=question+inputbox+button;

document.getElementById('output').innerHTML=row;

document.getElementById("number_1").value="";
document.getElementById("number_2").value="";

}
questionturn="player1";
answerturn="player2";
function anyFunction() {
    getanswer=document.getElementById("user_answer").value;
       
    if (getanswer==actualanswer) {
        if (answerturn=='player1') {
            player_score=player_score+1;
            document.getElementById("player_score").innerHTML=player_score;
            

        }
        else {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
   if (questionturn=="player1") {
       questionturn="player2"
       document.getElementById("player_question").innerHTML="questionturn-"+player_2name;
 }
 else {
     questionturn="player1"
     document.getElementById("player_question").innerHTML="questionturn-"+player_1name;
 }
 if (answerturn=="player1") {
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="answerturn-"+player_2name;
}
else {
  answerturn="player1"
  document.getElementById("player_answer").innerHTML="answerturn-"+player_1name;
}
document.getElementById("output").innerHTML="";
}