class Player{
    constructor(){}

    updatePlayername(name){
        var playername = "player"+playerCount;
        database.ref(playername).set({name:name})
    }

    updatePlayercount(count){
        database.ref('/').update({playerCount:count})
    }

    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount=data.val();
        })
    }
}