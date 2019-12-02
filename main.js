var itemCounter = 0;

function addItem() {
    itemCounter++;
    var tempItem = document.getElementById("addTodo").value;
    document.getElementById("addTodo").value = "";
    document.getElementById("list").innerHTML += "<li id='" + itemCounter + "' ><button onClick='flipDoneState(" + itemCounter + ")'>Done?</button>" + tempItem + "<button onClick='deleteMe(" + itemCounter + ")'>Delete Me</button></li>";
}

function flipDoneState(item) {
    var x = document.getElementById(item);
    if (x.classList.contains("strike")) {
        x.classList.remove("strike");
    } else {
        x.classList.add("strike");
    };
}

function deleteMe(item) {
    var x = document.getElementById(item);
    x.parentNode.removeChild(x);
}
