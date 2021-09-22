// THIS IS THE ANADYA LIBRARY OF CODES, WHERE I STORE THE CODES I HAVE MADE BY MY OWN

function bounceOff(object1,object2)
{
  if (object2.y-object1.y<=object2.height/2+object1.height/2 && object1.y-object2.y<=object2.height/2+object1.height/2)
{
    object2.velocityY = object2.velocityY*-1
    object1.velocityY = object1.velocityY*-1
}
}


function isTouching(object1, object2)
{
  if (object2.x-object1.x<=object2.width/2+object1.width/2
    && object1.x-object2.x<=object2.width/2+object1.width/2
    && object2.y-object1.y<=object2.height/2+object1.height/2
    && object1.y-object2.y<=object2.height/2+object1.height/2
    ) {
    return true;
  }
  else {
    return false;
  }
}