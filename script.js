const today = new Date();

const answer = document.querySelector('#answer');

const cocoDays = [1, 3, 4, 6]; // Måndag, Onsdag, Torsdag, Lördag

function isCoco() {
    answer.innerHTML = '';
    if (cocoDays.includes(today.getDay())) {
        answer.innerHTML += `
        <h2>Ja!</h2>
        <p>Det är Coco idag, så <strong>passa på att plocka undan</strong>!</p>
        `;
    } else { // Find the next Coco Day
        const todayDay = today.getDay();
        const nextCocoDay = cocoDays.find(day => day > todayDay) || cocoDays[0];
        const daysUntilNext = (nextCocoDay >= todayDay)
            ? nextCocoDay - todayDay
            : 7 - todayDay + nextCocoDay;

        // Get the date of the next Coco Day
        const nextDate = new Date();
        nextDate.setDate(today.getDate() + daysUntilNext);

        answer.innerHTML += `
        <h2>Nej!</h2>
        <p>Det är <strong>inte</strong> Coco idag. 
        <p>Man kan passa på att städa ändå om man pallar. Eller inte.</p>
        <p class="italic">(Nästa gång det är Coco är på ${nextDate.toLocaleString('sv-SV', { weekday: 'long' })} ${nextDate.toLocaleDateString()}.)</p>
        `;
    }
}
/*
function isCoco() {
    answer.innerHTML = '';
    if (today.getDay() == 1 || today.getDay() == 3 || today.getDay() == 4 || today.getDay() == 6) {
        console.log('Ja!');
        answer.innerHTML += `
        <h2>Ja!</h2>
        <p>Det är Coco idag, passa på att plocka undan!</p>
        `;
    } else {
        console.log('Nej!');
        answer.innerHTML += `
        <h2>Nej!</h2>
        <p>Det är inte Coco idag. Men man kan passa på att städa ändå.</p>
        <p>Nästa gång det är Coco är på ${}.
        `;
    }

}
*/
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