function getComputerChoice(){
    let x = Math.random() * 3 + 1; //pick random number b/w 1 and 3
    var y;
    switch(x){
        case 1:
            y = 'rock';
            break;
        case 2:
            y = 'paper';
            break;
        case 3:
            y = 'scissors'
            break;
    }
    return y; 
}