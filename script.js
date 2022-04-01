let a = "pravesh"

const weapons = ['rock', 'paper', 'scissors']

$(document).ready(function () {
    $('#start').click(function () {
        $('#start').html('play again');
    });
})

const add = () => {
    const input = document.getElementById("input").value
    const myChoice = weapons[Math.round(Math.random() * weapons.length)]

    switch (input) {
        case 'rock':
            if (myChoice === 'rock') {
                document.getElementById("result").innerHTML = "You both chose rock. It's a draw!"
                console.log('draw')
            } else if (myChoice === 'paper') {
                document.getElementById("result").innerHTML = "You chose rock and the computer chose paper. You lose!"
                console.log('lose')
            } else {
                document.getElementById("result").innerHTML = "You chose rock and the computer chose scissors. You win!"
                console.log('win')
            }
            break;
        case 'paper':
            if (myChoice === 'rock') {
                document.getElementById("result").innerHTML = "You chose paper and the computer chose rock. You win!"
                console.log('win')
            } else if (myChoice === 'paper') {
                document.getElementById("result").innerHTML = "You both chose paper. It's a draw!"
                console.log('draw')
            } else {
                document.getElementById("result").innerHTML = "You chose paper and the computer chose scissors. You lose!"
                console.log('lose')
            }
            break;
        case 'scissors':
            if (myChoice === 'rock') {
                document.getElementById("result").innerHTML = "You chose scissors and the computer chose rock. You lose!"
                console.log('lose')
            } else if (myChoice === 'paper') {
                document.getElementById("result").innerHTML = "You chose scissors and the computer chose paper. You win!"
                console.log('win')
            } else {
                document.getElementById("result").innerHTML = "You chose scissors and the computer chose scissors. It's a draw!"
                console.log('draw')
            }
            break;
        default:
            document.getElementById("result").innerHTML = "Please enter a valid choice! (rock, paper, scissors)"
    }

}