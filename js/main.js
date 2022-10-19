let answer = 0;

function saveNumber() {
    let inputTag = document.getElementById("userInput");

    console.log(inputTag);
    answer = inputTag.value

    console.log(answer);
}

function makeGuess() {
    let inputTag = document.getElementById("userGuess");
     console.log(inputTag);
     guess = inputTag.value;
     console.log(guess);


    if (guess === answer){
    alert("Du gissade rätt!")
    } else if (guess > answer){
        alert ("Du gissade för högt")
    } else  {(guess < answer)
        alert ("Du gissade för lågt")
    }
    }

    // makeGuess();