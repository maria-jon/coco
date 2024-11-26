const today = new Date();

const answer = document.querySelector('#answer');

function isCoco() {
    answer.innerHTML = '';
    if (today.getDay() == 1 || today.getDay() == 3 || today.getDay() == 4 || today.getDay() == 6) {
        console.log('Ja!');
        answer.innerHTML += `
        <p>Ja!</p>
        `;
    } else {
        console.log('Nej!');
        answer.innerHTML += `
        <p>Nej!</p>
        `;
    }

}

isCoco();

/*
må - 1
ti - 2
on - 3
to - 4
fr - 5
lö - 6
sö - 0
*/