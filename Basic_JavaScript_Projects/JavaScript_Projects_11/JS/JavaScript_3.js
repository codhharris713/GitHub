function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in this " + character.innerHTML + " series");
}