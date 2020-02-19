



var character = {
    charName: '',
    charHealth: 10,
    charDamage: 10,
    charArmor: 0
}
// each object represents 1 scene in the game
var scenes = [{
    sceneTitle: 'Concert Day',
    sceneContent: 'Concert Day',
    choice1: 'No',
    choice1Result: function() {
        updateGame('You lost the game before it even started :(', 'Try Again', "sure, let's do it!", scenes[0].choice2Result, scenes[0].choice2, scenes[0].choice2Result)
    },
    choice2: 'Start',
    choice2Result: function() {
        var charName = document.getElementById('charNameInput').value;
        console.log(charName.length)
        if (charName.length > 0) {
            document.getElementById('charInfo').style.display = 'flex';
            character.charName = charName;
            document.getElementById('charNameInput').style.display = 'none';
            updateGame(scenes[1].sceneTitle, scenes[1].sceneContent, scenes[1].choice1, scenes[1].choice1Result, scenes[1].choice2, scenes[1].choice2Result)
            updateCharacter(character.charName, character.charHealth, character.charDamage, character.charArmor)
        } else {
            document.getElementById('charNameInput').style.border = '1px solid red';
            alert('You need to enter a character name')
        }
    },
}, {
    sceneTitle: 'The Couch',
    sceneContent: 'You wake up hung over from last night.  You have tickets for a concert at 6pm.  What do you do',
    choice1: 'Wake up and go',
    choice1Result: function() {
        updateGame(scenes[2].sceneTitle, scenes[2].sceneContent, scenes[2].choice1, scenes[2].choice1Result, scenes[2].choice2, scenes[2].choice2Result)
    },
    choice2: 'Sleep it off',
    choice2Result: function() {
        updateGame(scenes[3].sceneTitle, scenes[3].sceneContent, scenes[3].choice1, scenes[3].choice1Result, scenes[3].choice2, scenes[3].choice2Result)
        character.charHealth = character.charHealth + 0;
        updateCharacter(character.charName, character.charHealth, character.charDamage, character.charArmor)
    },
}, {
    sceneTitle: 'Out the door',
    sceneContent: "You grab your skate board and head out the door.  Since your still hurting from last night you decide to stop at a bar along the way",
    choice1Result: function() {
        alert("Have a few beers to releve the hangover");
        character.charHealth = character.charHealth + 3;
        updateCharacter(character.charName, character.charHealth, character.charDamage, character.charArmor)
    },
    choice2: 'Drink a plethora of beer',
    choice2Result: function() {
        alert("you drink way to many beers and end up drunk.  You miss the concert");
    },

}]
function updateGame(title, content, choice1text, choice2text, choice1result, choice2result) {
    // update the page content
    document.getElementById('sceneTitle').textContent = title;
    document.getElementById('sceneContent').textContent = content;
    document.getElementById('choice1').textContent = choice1text;
    document.getElementById('choice1').onclick = choice2text;
    document.getElementById('choice2').textContent = choice1result;
    document.getElementById('choice2').onclick = choice2result;
    // play audio
    // var x = document.getElementById("myAudio");
    // x.play(); 
}
function updateCharacter(name, health, damage, armor) {
    document.getElementById('charName').textContent = name;
    document.getElementById('charHealth').textContent = health;
    document.getElementById('charDamage').textContent = damage;
    document.getElementById('charArmor').textContent = armor;
}
updateGame(scenes[0].sceneTitle, scenes[0].sceneContent, scenes[0].choice1, scenes[0].choice1Result, scenes[0].choice2, scenes[0].choice2Result);