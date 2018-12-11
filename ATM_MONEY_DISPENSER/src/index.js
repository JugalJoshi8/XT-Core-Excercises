(function () {
    const notesMap = {};
    document.getElementsByClassName('form__input--submit')[0].addEventListener('click', getMoney);
    const amountInput = document.getElementById('form__input--amount');
    const notesList = document.getElementsByClassName('notesList')[0];
    const noteTypes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
    let totalNotes = 0;
    const totalNotesElement = document.getElementsByClassName('totalNotes')[0];
    function getMoney(event) {
        event.preventDefault();
        notesList.innerHTML = '';
        totalNotes = 0;
        let listItem = null;
        let amount = parseInt(amountInput.value, 10);
        for (let i = 0; i < noteTypes.length; i++) {
            amount = setNotes(amount, noteTypes[i]);
            listItem = document.createElement('li');
            listItem.innerHTML = notesMap[noteTypes[i]] + ' notes of Rs ' + noteTypes[i];
            notesList.appendChild(listItem);
        }
        for (let key in notesMap) {
            listItem = document.createElement('li');
            listItem.innerHTML = notesMap[key] + ' notes of Rs '
        }
        totalNotesElement.innerHTML = 'Total notes dispensed: ' + totalNotes;
    }

    // sets number of notes required for given note value in notes map
    function setNotes(amount, noteValue) {
        notesMap[noteValue] = Math.floor(amount / noteValue);
        totalNotes += notesMap[noteValue]
        amount = amount % noteValue;
        return amount;
    }
})();