var allNotes = document.querySelector(".allNotes");
var NoteDiv = document.querySelector(".notesBox");
var addBtn = document.querySelector(".addNoteBtn");
var notes = document.querySelectorAll(".inputBox");


const storeData  = () =>{
    localStorage.setItem("NoteData1",allNotes.innerHTML); 
}

const showData = () =>{
    allNotes.innerHTML = localStorage.getItem("NoteData1");
}

showData();

const addingNotes  = () =>{
    var noteBox = document.createElement("DIV");
    noteBox.className = "notesBox"
    var textBox = document.createElement("P");
    textBox.setAttribute("contenteditable","true");
    textBox.className = "inputBox";
    var delBtn = document.createElement("SPAN");
    delBtn.innerHTML = '<ion-icon name="trash-outline">';
    delBtn.className = "delBtn";
    noteBox.appendChild(textBox);
    noteBox.appendChild(delBtn);
    allNotes.appendChild(noteBox);
    storeData();
}

const addFunctions = (e) =>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(eNote => {
            eNote.addEventListener("keyup",()=>{
                storeData();
            })
        }) 
    }
}

allNotes.addEventListener("click", addFunctions);
addBtn.addEventListener("click", addingNotes);








