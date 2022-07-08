let timeLeft = 60; 
let currentQuestion = 0;
let endQuiz = document.getElementById("footer");
let score = 0;
let highScore = 0;
// Questions for quiz
const questions = [
    {
        Question: 'How should you add a comment in javacsript?',
        optionA: '//Example comment',
        optionB: '<!--Example comment--!>',
    }
    ,
    {
        Question: 'Which HTML element do we put JavaScript inside of?',
       optionA: '<script>',
       optionB:'<javacriptt>',
       optionC: '<scripting>', 
    }
    ,
    {
        Question: 'How do yo create a function in Javascript?',
        optionA:'function quizExample()',
        optionB: 'function:quizExample()',
        optionC:'function = quizExample()', 
    }
    ,
    {
        Question: 'Java & JavaScript are the same?',
        optionA: 'False',
        optionB: 'True', 
    }
    ,
    {
        Question: 'Which is example is the correct way to write an array',
        optionA: 'var example = ["one","two","three"]',
        optionB: 'var example = "one","two","three"', 
    }
]
//sets uo quiz questions
function setUpQuestion()
{
    document.getElementsByTagName('p')[0].innerHTML = questions[currentQuestion].Question; 
    document.getElementById("crt").innerText = questions[currentQuestion].optionA;
    document.getElementById("wrg").innerText = questions[currentQuestion].optionB;
}
let srtBTN = document.getElementById("srtGme");
window.onload = function()
{
    let arr = [];
    for(let i = 0; i < localStorage.length; i++)
        {
            if(localStorage.key(i) == "score")
            {
                alert(localStorage.getItem(localStorage.key(i)))
                highScore = (localStorage.getItem(localStorage.key(i)));
            } 
            else
            {
            }
        }
   document.getElementById("quiz").style.display = "none";
 document.getElementById("timer").style.display = "none";
 endQuiz.style.display = "none";
}
//starts quiz when button is clicked
srtBTN.addEventListener("click",function(){
    document.getElementById("quiz").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("time").innerHTML = timeLeft;
    setUpQuestion();
});
// if quiz is completed before time is up quiz ends 
window.setInterval(function(){
    if(timeLeft > 0)
    {
        timeLeft--;
    }
    document.getElementById("time").innerHTML = timeLeft;
},5000)

document.getElementById("crt").addEventListener("click",function(){
    if(timeLeft <= 0)
    {
        alert("Time up. Game Over")
    }
    else
    {
        currentQuestion++; 
        if(questions.length == currentQuestion)
        {
            let response = prompt("You answered all the questions.\nYour score: "+score+"\nPlease enter your name."); 
            localStorage.setItem("score",score);
            localStorage.setItem("score","Name: "+response+" Score: "+score);
            endQuiz.style.display = "block";
            document.getElementById("HighScore").innerHTML+=" "+highScore;
            for(let i = 0; i < localStorage.length; i++)
            {
                if(localStorage.key(i) == "score")
                {
                    alert(localStorage.getItem(localStorage.key(i)))
                } 
                else
                {
                
                }
            }
        }
        else
        {
            setUpQuestion();
            score++;
        }
    }
});

//If time runs out - game ends - & alert is sent
document.getElementById("wrg").addEventListener("click",function(){
    if(timeLeft <= 0)
    {
        alert("Time up. Game Over")
    }
    else
    {
        timeLeft-=10
        currentQuestion++;
        if(questions.length == currentQuestion)
        {
            // End of game, intials/name screen and score pop up
            let response = prompt("You answered all the questions.\nYour score: "+score+"\nPlease enter your name."); 
            localStorage.setItem("score","Name: "+response+" Score: "+score); 
            endQuiz.style.display = "block";
            document.getElementById("HighScore").innerHTML+=" "+highScore;
            for(let i = 0; i < localStorage.length; i++)
            {
                if(localStorage.key(i) == "score")
                {
                    alert(localStorage.getItem(localStorage.key(i)))
                } 
                else
                {
                }
            }
        }
        else
        {
            setUpQuestion();
        }
    } 
});

