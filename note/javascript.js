document.addEventListener("DOMContentLoaded", function () {
    const addNoteButton = document.getElementById('addNote');
    const notesContainer = document.getElementById('notesContainer');

    addNoteButton.addEventListener('click', function () {
        const noteInput = document.getElementById('noteinput').value; // Retrieve the value from the input field
        if (noteInput.trim() !== '') { // Check if the input is not empty
            addNoteToLocalStorage(noteInput);
            displayNotes();
        }
    });

    function addNoteToLocalStorage(content) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ content: content, done: false });
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    

    function displayNotes() {
        notesContainer.innerHTML = '';
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
        notes.forEach(function (note, index) {
            const noteLi = document.createElement('li');
            noteLi.classList.add('note');
            if (note.done) {
                noteLi.classList.add('done'); // Add the "done" class for haalea effect
            }
            const noteText = document.createElement('span');
            noteText.textContent = note.content;
        
            const toggleButton = document.createElement('button');
            toggleButton.textContent = note.done ? 'Not done' : 'Done';
            toggleButton.addEventListener('click', function () {
                toggleNoteDone(index);
            });
        
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', function () {
                deleteNote(index);
            });
        
            noteLi.appendChild(toggleButton); // Mark button first
            noteLi.appendChild(noteText);    // Text content in the middle
            noteLi.appendChild(deleteButton); // Delete button last
        
            notesContainer.appendChild(noteLi);
        });
        
    }
    

    
    function toggleNoteDone(index) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes[index] = { content: notes[index].content, done: !notes[index].done };
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }
    
    
    function deleteNote(index) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes(); // Refresh the list after deleting
    }
    

    displayNotes();
});
