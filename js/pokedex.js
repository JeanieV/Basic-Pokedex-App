function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;

    /* --- Part 1 : Create pokemon data Object --- */
    // Use If to ensure input validation (ensure input fields are !empty)
    // Create pokemon object here (const pokemon) using user input Strings

    const pokemon = { name: name , type: type, region: region };
   

    if(name !== "" && type !== "" && region !== ""){
       

    }
    else{
        alert("Kindly create your character");
    }

    
    // Create a span element (const pokemonData) and put the pokemon objects properties inside of it
    let type1 =
        `  
<li class="${pokemon.type}">
        <span> name: ${pokemon.name}</span>
        <br>
        <span> type: ${pokemon.type}</span>
        <br>
        <span> region: ${pokemon.region}</span>
        <br>
        <span>
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${pokemon.type}">
                    <input type="submit">
                    </form>
        </span>
    </li>
    `

    /* --- Part 2 : Creating other DOM Objects --- */
    // Create HTML li element here (const pokedexEntry)
    // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
    // Creating a preview button (using a Template Literal)
    // this code is for an html form that will Google search the name of the pokemon
    // const previewButton = `
    //         <form action="http://google.com/search" target="_blank">
    //             <input name="q" hidden value="${name}">
    //                 <input type="submit">
    //                 </form>
    //                 `
    /* --- Part 3 : Add things into the DOM --- */
    // Firstly append pokemonData to the innerHTML of pokedexEntry
    // Secondly append the previewButton to innerHTML of pokedexEntry
    // Lastly we will get the ul List element that is meant to contain all pokedex entries
    // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element


document.getElementById("pokedex-entries").innerHTML += type1;

let pokedexMemory = [pokemon];
console.log(pokedexMemory);

}
