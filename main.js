const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", addNote);

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

    save.addEventListener("click", saveNotes);
    textarea.addEventListener("input", saveNotes)
    trash.addEventListener("click", () => {
        note.remove();
        saveNotes();

    })

     main.appendChild(note);
}

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