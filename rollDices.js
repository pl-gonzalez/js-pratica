function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");

    const values = []
    const images = []

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="dice_images/${value}.png" alt="Numero ${value} no dado" />`)
        
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImg.innerHTML = images.join('')
}


/** HTML for this script:
 * 
 * <div class="container">
    <h1>Dice Roller</h1>
    <label for=""># of dice</label>
    <input type="number" value=1 min="1" id="numOfDice">
    <button onclick="rollDice()">Rool Dice</button>
    <div id="diceResult"></div>
    <div id="diceImg"></div>
   </div>
 */
