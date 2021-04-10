
$(document).ready(function() {
    $(".dis").hide()
    for( let i = 1; i <=50; i++){
        $.get(`https://pokeapi.co/api/v2/pokemon/${i}`, function(res){
       // console.log(res.sprites.front_shiny);
        $(".poke").append(`<img id = ${i} src = '${res.sprites.front_shiny}' />`);
        
    }, "Json")
    }
    
    $(document).on('click', 'img', function(){
        $(".dis").empty();
        $(".dis").show()
        $.get(`https://pokeapi.co/api/v2/pokemon/${$(this).attr("id")}`, function(res){
        $(".dis").append(`<h1> ${res.name}</h1>`);
        $(".dis").append(`<img  src = '${res.sprites.front_shiny}' />`);
        $(".dis").append(`<h3> Types: </h3>`);
        var toAdd = "<ul>";
        for( let i = 0; i <res.types.length; i++)
        {
            toAdd+= `<li> ${res.types[i].type.name}</li>`;
        }
        $(".dis").append(toAdd);
        $(".dis").append("</u>");
        $(".dis").append(`<h3> height: </h3>`);
        $(".dis").append(`<h3> ${res.height} </h3>`);
        $(".dis").append(`<h3> weight: </h3>`);
        $(".dis").append(`<h3> ${res.weight} </h3>`);

        }, "Json")


    });

    
});