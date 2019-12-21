//global Variables
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let gridSize=50,speed=20,player="computer";

let canvasSide=Math.min(innerHeight,innerWidth);
    canvasSide=Math.round(canvasSide/gridSize)*gridSize
let boxSize=canvasSide/gridSize;
canvas.style.backgroundColor="#222"

console.log(canvasSide);


canvas.width = canvasSide;
canvas.height = canvasSide;


//Changing direction
window.addEventListener('keypress', (event) => {  
  if(event.key==="w"){
    yspeed=-1;
    xspeed=0;
  }
  if(event.key==="a"){
    yspeed=0;
    xspeed=-1;
  }
  if(event.key==="s"){
    yspeed=1;
    xspeed=0;
  }
  if(event.key==="d"){
    yspeed=0;
    xspeed=1;
  }
  if(event.key===' '){
    init();
    isGameOver=false;
    isStartPage=false;
  }  
})


//Changing position of Snake


const checkPos=()=>{
  if(snake[0].x>(gridSize-1)){
    snake[0].x--;
    xspeed=-1;
    yspeed=0;
  }
  if(snake[0].y>(gridSize-1)){
    snake[0].y--;
    yspeed=-1;
    xspeed=0;
  } 
  if(snake[0].x<0){
    snake[0].x++;
    xspeed=1;
    yspeed=0;
  } 
  if(snake[0].y<0){
    snake[0].y++;
    yspeed=1;
    xspeed=0;
  } 
     if(snake.slice(1,snake.length).findIndex(sna=>(
        sna.x==snake[0].x&&sna.y==snake[0].y))!=-1){
        isGameOver=true;
        stop=true;
        console.log("#METOO");
    }
      
  if(snake[0].x===food.x && snake[0].y===food.y){
      snake.push(new box(food.x,food.y))
      prevSna.push({})
      updateScore();
      newFoodPos();
      if(c>0)
        c=100;
      else{
        isGameOver=true;
        isStartPage=false;
      }
        
    }
} 

//animation
function update(){
  ctx.clearRect(0,0,innerHeight,innerWidth)
  if(!isGameOver){
    checkPos();
    display();
    draw_grid();
    if(player==="human" || c===0)
      updatePos()
    else
      autoUpdatePos();
 }
    else{
      if(isStartPage){
        startPage();
      }
      else{
        GameOver()
      }
   }
    if(!stop)
    requestAnimationFrame(()=>setTimeout(update,1000/speed))
}
init();
update()

