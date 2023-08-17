function getComputerChoice(){
    let x = Math.floor(Math.random() * 3) + 1; //pick random number b/w 1 and 3
    var y;
    switch(x){
        case 1:
            y = "rock";
            break;
        case 2:
            y = "paper";
            break;
        case 3:
            y = "scissors";
            break;
    }
    return y; 
}

function rpsSim(playerSelect, compSelect){
    var a;
    if (playerSelect == "rock"){
        if (compSelect == "rock"){
            a = "tied";
        }else if (compSelect == "paper"){
            a = "you lose, paper beats rock";
        } else if (compSelect == "scissors"){
            a = "you win, rock beats scissors!";
        }
    }else if (playerSelect == "paper"){
        if (compSelect == "paper"){
            a = "tied";
        }else if (compSelect == "rock"){
            a = "you win, paper beats rock!";
        } else if (compSelect == "scissors"){
            a = "you lose, paper loses to scissors!";
        }
    }else if (playerSelect == "scissors"){
        if (compSelect == "scissors"){
            a = "tied!";
        }else if (compSelect == "rock"){
            a = "you lose, scissors loses to rock!";
        } else if (compSelect == "paper"){
            a = "you win, scissors beats paper!";
        }
    }
    return a;
}
const rockButt = document.getElementById("rock");
const paperButt = document.getElementById("paper");
const scissorButt = document.getElementById("scissors");


var buttClick;

function game(){
    let rds = 5;
    while(rds != 0){
    var compSelect = getComputerChoice();
    
    rockButt.addEventListener("click", function() {
        // This function will be executed when the button is clicked
        // You can put your code here to handle the button click
        buttClick = "rock"; 
        // You can also call a function or perform any other actions you need here
    });
    // Add a click event listener to the button
    paperButt.addEventListener("click", function() {
        // This function will be executed when the button is clicked
        // You can put your code here to handle the button click
        buttClick = "paper";
        // You can also call a function or perform any other actions you need here
    });

    // Add a click event listener to the button
    scissorButt.addEventListener("click", function() {
        // This function will be executed when the button is clicked
        // You can put your code here to handle the button click
        buttClick = "scissors"; 
        // You can also call a function or perform any other actions you need here
    });
    console.log(rpsSim(buttClick, compSelect));

    rds = rds - 1;
}
}
game();