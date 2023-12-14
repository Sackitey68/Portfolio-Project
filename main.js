const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


// This function listens to click event when the user clicks add Note
addBtn.addEventListener("click", addNote);


// When the user clicks on add Note this function pop up the textarea
function addNote(){
    const note  = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="toolbar">
            <i class=" save fas fa-save"></i>
            <i class=" trash fas fa-trash"></i>
        </div>
            <textarea name="" id="" cols="30" rows="10"></textarea> 
    `;


    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");


    // This function listens to saves the notes when the user clicks the save icon
    save.addEventListener("click", saveNotes);
    textarea.addEventListener("input", saveNotes)
    trash.addEventListener("click", () => {
        note.remove();
        saveNotes();

    })

     main.appendChild(note);
}

// This functions saves the last note after being refreshed
function saveNotes() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes, data);

    if (data.length === 0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

// Saves the function in JSON 
function loadNotes(){
    const isNotes = JSON.parse(localStorage.getItem("notes"));

    if (isNotes !== null){
        isNotes.forEach(noteText =>{

            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length - 1];
            lastNote.value = noteText;
        });
    } else {
        addNote()
    }
}

loadNotes()