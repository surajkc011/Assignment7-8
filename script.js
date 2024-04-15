document.addEventListener('DOMContentLoaded', function () {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const rollButton = document.getElementById('rollButton');
    const score1Display = document.getElementById('score1');
    const score2Display = document.getElementById('score2');
    const winnerDisplay = document.getElementById('winner');

    let score1 = 0;
    let score2 = 0;

    rollButton.addEventListener('click', function () {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        dice1.src = `dice${roll1}.png`;
        dice2.src = `dice${roll2}.png`;

        const difference = Math.abs(roll1 - roll2);

        if (roll1 > roll2) {
            score1 += difference;
        } else if (roll2 > roll1) {
            score2 += difference;
        }

        score1Display.textContent = score1;
        score2Display.textContent = score2;

        if (score1 >= 20) {
            winnerDisplay.textContent = 'Player 1 Wins!';
            rollButton.disabled = true;
        } else if (score2 >= 20) {
            winnerDisplay.textContent = 'Player 2 Wins!';
            rollButton.disabled = true;
        }
    });
});
