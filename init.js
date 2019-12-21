

let xspeed=1,
yspeed=0,
snake=[new box(0,0)],
prevSna=[{}],
food=new box(),
isGameOver=true,
isStartPage=true,
positions=new Array(gridSize),
graph=new Array(gridSize+2),
aStarRes,
count=0,

stop=false;
c=100;

//initialising Variables
const init=()=>{
    canvasSide=Math.min(innerHeight,innerWidth);
    canvasSide=Math.round(canvasSide/gridSize)*gridSize
    boxSize=canvasSide/gridSize;
    xspeed=1
    yspeed=0
    snake=[new box(0,0)]
    prevSna=[{}]
    count=0
    food=new box()
    isGameOver=false
    graph=new Array(gridSize+2)
    positions=new Array(gridSize)

    for(let i=0;i<gridSize;i++){
        graph[i]=new Array(gridSize+2).fill(1000000)
        positions[i] = new Array(gridSize).fill(0)
    }
    graph[gridSize]=new Array(gridSize+2).fill(1000000)
    graph[gridSize+1]=new Array(gridSize+2).fill(1000000)
    
    updateScore();
    newFoodPos();
    draw_grid();
}