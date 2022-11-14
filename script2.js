
const getpokemones = async()=>{
    const url_pokemon = "https://pokeapi.co/api/v2/pokemon/";
    try{
        const pokemones = await fetch(url_pokemon);
        const pokeData = await pokemones.json();
        const pokename=pokeData.results.map(poke=>poke.name)

       console.log(pokename);
       return pokename
       

    }catch{
        console.log("el error es el error:",error);
    }
    return pokename
}
getpokemones()

getpokemones().then (poki=>{

document.getElementById( "card-title1").innerHTML = poki[0]
document.getElementById( "card-title2").innerHTML = poki[1]
document.getElementById( "card-title3").innerHTML = poki[2]
document.getElementById( "card-title4").innerHTML = poki[3]
document.getElementById( "card-title5").innerHTML = poki[4]
document.getElementById( "card-title6").innerHTML = poki[5]
document.getElementById( "card-title7").innerHTML = poki[6]
document.getElementById( "card-title8").innerHTML = poki[7]
document.getElementById( "card-title9").innerHTML = poki[8]
document.getElementById( "card-title10").innerHTML = poki[9]

})


