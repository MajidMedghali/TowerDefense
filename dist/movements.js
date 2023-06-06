//Return True if the move is available, else False
export const AvailablePosition = (p, w) => {
    if (p.x >= w.Height || p.y >= w.Width || p.x < 0 || p.y < 0)
        return false;
    return w.Matrix[p.x][p.y].AnActor.Type === "Road";
};
//this function caracterizes the inactive actors in the world, floor and road
export const noMove = (pos, aWorld, type) => {
    return;
};
/*  this function returns a possible simple move for an actor, we take also the type of the actor,
    because the function doesn t give good outputs with the type of actor that is available in the
    type position, we favorise the moves in the direction of the end position */
export const SimpleMove = (anActor, aWorld, type) => {
    let dx = 1;
    let dy = 1;
    if (type === "BigMonster") {
        dx = 2;
        dy = 2;
    }
    else if (type === "SimpleMonster") {
        dx = 1;
        dy = 1;
    }
    let move = { x: anActor.Pos.x + dx, y: anActor.Pos.y + dy };
    if (AvailablePosition(move, aWorld)) {
        return move;
    }
    const rand = Math.random();
    move = { x: anActor.Pos.x, y: anActor.Pos.y + dy };
    if (AvailablePosition(move, aWorld)) {
        return move;
    }
    move = { x: anActor.Pos.x + dx, y: anActor.Pos.y };
    if (AvailablePosition(move, aWorld)) {
        return move;
    }
    move = { x: anActor.Pos.x - dx, y: anActor.Pos.y };
    if (AvailablePosition(move, aWorld)) {
        return move;
    }
    move = { x: anActor.Pos.x, y: anActor.Pos.y - dy };
    if (AvailablePosition(move, aWorld)) {
        return move;
    }
    return { x: anActor.Pos.x, y: anActor.Pos.y };
};
// initialize a seed value
let seed = new Date().getTime();
// define a random number generator function
function myRandom() {
    // use the seed value to generate a new seed
    seed = (seed * 9301 + 49297) % 233280;
    // return a random number between 0 and 1
    return seed / 233280;
}
//  function getRandomInt(max : number) {
//     return Math.floor(Math.random() * max);
//   }
function getRandomInt(max) {
    return Math.floor(myRandom() * max);
}
//  export const SimpleMove=(anActor:position, aWorld:world, type:string) : point=>{
//     const dx: number=1;
//     const dy: number=1;
//      let move : point =  {x : anActor.Pos.x,y : anActor.Pos.y+dy};
//      if(AvailablePosition(move, aWorld)){
//          return move;
//      }
//      const dirs : point[] = [];
//      move = {x : anActor.Pos.x+dx,y : anActor.Pos.y+dy};
//      if(AvailablePosition(move, aWorld)){
//          dirs.push(move);
//      }
//      move = {x : anActor.Pos.x+dx, y :anActor.Pos.y};
//      if(AvailablePosition(move, aWorld)){
//         dirs.push(move);
//      }
//      move = {x : anActor.Pos.x-dx, y :anActor.Pos.y};
//      if(AvailablePosition(move, aWorld)){
//         dirs.push(move);
//      }
//      move = {x : anActor.Pos.x,y : anActor.Pos.y-dy};
//      if(AvailablePosition(move, aWorld)){
//         dirs.push(move);
//      }
//      move = {x : anActor.Pos.x,y : anActor.Pos.y};
//      if(AvailablePosition(move, aWorld)){
//         dirs.push(move);
//      }
//      const rand = getRandomInt(dirs.length);
//      if(dirs[rand] !== undefined) return dirs[rand];
//      return anActor.Pos;
//  };
/////////////////////////////////////           END           /////////////////////////////////////////////////////
//# sourceMappingURL=movements.js.map