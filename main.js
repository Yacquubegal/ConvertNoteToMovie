let noteArray = [];
let selectedType = "";
// define a constructor to create note objects
let NoteObject = function (pData, PType) {
    this.data = pData;
    this.type = PType;
}
document.addEventListener("DOMContentLoaded", function (event)  {

    document.getElementById("buttonAdd").addEventListener("click", function (event) {

        noteArray.push(new NoteObject(document.getElementById("Note").value, selectedType));
        console.log(noteArray);
        document.getElementById("note").value = "";
    });
    $(document).blnd("change","#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

    // page before show codes **********************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {
        createList();
    });
});
function createList() {

    //clear prior data
    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    noteArray.forEach(function(element,) {    // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.data + ":  " + element.type;
        myul.appendChild(li);
    });
};

