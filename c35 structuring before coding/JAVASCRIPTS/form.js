class Form{
    constructor(){}

    display(){
        var title = createElement("h2")
        title.html("car racing game")
        title.position(130,0)
        var input = createInput("name")
        var button = createButton("Play now!")
        var greeting = createElement("h3")
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount=playerCount+1;
            player.updatePlayername(name);
            player.updatePlayercount(playerCount);
            greeting.html("Hello!"+name);
            greeting.position(130,160)
        })
    }
}