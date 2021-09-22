var ball;
var position,database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "blue";
    database=firebase.database();
    console.log(database);
    database.ref("ball/position").on("value", readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}



function changePosition(x,y){
    database.ref("ball/position").update({
        "x":ball.x+x, "y":ball.y+y
    })
}
