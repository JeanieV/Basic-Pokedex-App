function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;

    //Pokemon object created
    const pokemon = { name: name, type: type, region: region };


    //If statement containing everyting to make sure the user inputs a name,type and region

    if (name !== "") {

        if (type == "") {
            alert("Kindly enter a pokemon type!");

        }
        else if (region == "") {
            alert("Kindly enter a pokemon region!");
        }
        else {
            //This is the list append part
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
    
            //This will ensure the list gets expanded when the user enters more data
            document.getElementById("pokedex-entries").innerHTML += type1;
        }
    }
    else {
        alert("Kindly enter your pokemon name");
    }

    //This is to make sure everything is working correctly
    let pokedexMemory = [pokemon];
    console.log(pokedexMemory);

}






