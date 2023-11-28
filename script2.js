var input=document.getElementById("input")
var result=document.getElementById("result")
var guessavailable=document.getElementById("guessavailable")
var guess=3

// Generating RandomNumber
var randomnumber=Math.floor(Math.random()*10)+1

if(randomnumber>5)
{
    randomnumber=randomnumber-5
    console.log(randomnumber)
}

function bclicked()
{
    if(guess>0)
    {
        if(input.value==randomnumber)
        {
            result.textContent="You are Right"
        }
        else{
                guess=guess-1
                guessavailable.textContent="Available guess: "+guess
                result.textContent="You are Wrong"
        }
    }
    else{
        guessavailable.textContent="Refresh and Play the game again"
    }

}