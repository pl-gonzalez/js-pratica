// TEmperature conversion - BroCode

const textBox = document.getElementById('textBox')
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit"
    }
}


/**
 *  <form action="">
        <h1>Temperature conversion</h1>
        <input type="number" id="textBox" value="0"><br>

        <input type="radio" id="toFahrenheit" name="unit">
        <label for="toFahrenheit">Celsius to Fahrenheit</label> <br>

        <input type="radio" id="toCelsius" name="unit">
        <label for="toCelsius">Fahrenheit to Celsius</label>

        <button type="button" onclick="convert()">Submit</button>
        <p id="result"></p>
    </form>
    
 */