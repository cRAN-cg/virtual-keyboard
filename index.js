initKeyboard();

function initKeyboard() {
    var keyboardDiv = document.getElementById("keyboard-div");
    var keyCodename = [48, 65, 75, 84, ["caps", "space"]];
    for (var i = 0; i < 5; i++) {
        var keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard__row");
        if (i == 4) {
            for (var j = 0; j < 2; j++) {
                var key = document.createElement("span");
                key.classList.add("keyboard__row__key");
                var keyName = document.createTextNode(keyCodename[4][j]);
                key.appendChild(keyName);
                keyboardRow.appendChild(key);
            }
            keyboardDiv.appendChild(keyboardRow);
            break;
        }
        for (var j = 0; j < 10 - i; j++) {
            var key = document.createElement("span");
            key.classList.add("keyboard__row__key");
            var keyName = document.createTextNode(String.fromCharCode(keyCodename[i] + j));
            key.appendChild(keyName);
            keyboardRow.append(key);
        }
        keyboardDiv.appendChild(keyboardRow);
    }

    // Add event listener
    keyboardDiv.addEventListener("click", clickHandler);
}

function clickHandler(event){
    capsLockHandler(event)
    if (event.target.innerText.toUpperCase() != "SPACE" && event.target.innerText.length > 1) return;
    alphanumericHandler(event);
}

function capsLockHandler(event){
    if (event.target.innerText.toUpperCase() == "CAPS"){
        var keys = document.querySelectorAll(".keyboard__row__key");
        for (var i = 0; i < keys.length; i++){
            if (keys[i].innerText == "caps" || keys[i].innerText == "space") continue;
            if (keys[i].style.textTransform == "lowercase") keys[i].style.textTransform = "uppercase";
            else keys[i].style.textTransform = "lowercase";
        }
    }
}

function alphanumericHandler(event){
    var outputDiv = document.getElementById("output");
    var output = outputDiv.innerText;
    var textNodeSpan = document.createElement("span");
    var text = output + event.target.innerText;
    var textNode = document.createTextNode(text);
    textNodeSpan.appendChild(textNode);
    outputDiv.replaceChild(textNodeSpan, outputDiv.childNodes[0]);
}

