/**
 * fetch - Funcstion used for making HTTP requests to fetch resources
 *         (JSON style data, images, files)
 *  Simplifies asynchronous data fetching in JS and 
 *  used for interacting with APIs to retrive and send data
 *  asynchronously over the web.
 * 
 *  fetch(url, { options })
 */

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // the response will always resolve, so you need to check if is valid
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource")
//         }

//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error)
        
    }
}   



/** HTML for this JS:
 * 
 * <input type="text" id="pokemonName" placeholder="Enter Pokemon name">
    <button onclick="fetchData()">Fetch Pokemon</button>
    
    <img src="" alt="Pokemon Srite" id="pokemonSprite" style="display: none;">

 */

