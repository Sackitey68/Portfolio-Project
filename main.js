const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", addNote);

function addNote(){
    const note  = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="toolbar">
            <i class="fas fa-save"></i>
            <i class="fas fa-trash"></i>
        </div>
            <textarea name="" id="" cols="30" rows="10"></textarea> 
    `;
     main.appendChild(note);
}