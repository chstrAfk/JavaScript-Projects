let activePlayer = 'x'; 
let selectedsquares = []; 
function placeXOrO(squareNumber) {
    if (!selectedsquares.some(element => element.includes(squareNumber))) {
        let select= document.getElementByid(squareNumber); 
if (activePlayer === 'X') { 
select.style.backgroundimage = 'url("images/x.png")'; } else { 
    select.style.backgroundimage = 'url("images/x.png")'; }
    }
if (activePlayer === 'X') { 
activePlayer = 'o'; 
} else {
    activePlayer = 'x';
    Audio(' ./media/place.mp3'); 
    if (activePlayer === 'o') {
        disableClick(); 
setTimeout(function () { computersTurn(); }, 1000);
    }
}
return true }
unction computersTurn() {
    let success = false; 
    let pickASquare;
     while (!success) { 
        pickASquare = String(Math.floor(Math.random() * 9));
         if (placexoro(pickASquare)) { 
            placexoro(pickASquare); success = true; 
} } }
function checkWinConditions() {
if (arrayincludes('0X', ·1x·, ·2x· )) { dravMinLine(50, 100, 558, 100) } 
else if (arrayincludes('3X','4X','5X')) { dravMinLine(50, 304, 558, 304) }
else if (arrayincludes('6X','7','8X')) { dravMinLine(50, 508, 558, 508) }
else if (arrayincludes('0X','3','6X')) { dravMinLine(100, 50, 100, 558) }
else if (arrayincludes('1X','4','7X')) { dravMinLine(304, 50, 304, 558) }
else if (arrayincludes('2X','5','8X')) { dravMinLine(508, 50, 508, 558) }
else if (arrayincludes('6X','4','2X')) { dravMinLine(50, 508, 558, 508) }
}
//checks for a tie - if no win conditions are met and 9 squares have been selected else if (selectedsquares.length >= 9) { 
else if (selectedsquares.length >= 9) {
    

}