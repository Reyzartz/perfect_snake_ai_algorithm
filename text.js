const startPage=()=>{
    ctx.font=`70px digital`
    ctx.fillStyle = "#bbb";
    ctx.textAlign = "center";
    ctx.fillText("Snake-V2", canvasSide/2, canvasSide/2); 
    ctx.font=`40px digital`
    ctx.fillStyle = "#bbb";
    ctx.textAlign = "center";
    ctx.fillText("Press Space to start", canvasSide/2, canvasSide*.6); 
  }
  let score=document.getElementById("score");
  let gridSizeEle=document.getElementById("gridSize")
  let speedEle=document.getElementById("speed")
  const updateScore=()=>{
    if(snake.length<10){
      score.innerText=`0000${snake.length-1}`;
    }
    else if(snake.length>10 && snake.length<100){
      score.innerText=`000${snake.length-1}`;
    }
    else if(snake.length>100 && snake.length<1000){
      score.innerText=`00${snake.length-1}`;
    }
    else if(snake.length>1000){
      score.innerText=`0${snake.length-1}`;
    }
  }
  const changeGrid=(event)=>{
    if(event.key==="Enter"){
      gridSize=event.target.value;
      isStartPage=true;
      isGameOver=true;
    } 
  }
  const changeSpeed=(event)=>{
    if(event.key==="Enter"){
      speed=event.target.value;
    } 
  }
  gridSizeEle.addEventListener("keypress",(e)=>changeGrid(e))
  speedEle.addEventListener("keypress",(e)=>changeSpeed(e))
  
  const changePlayer=(pla)=>{
    player=pla
    if(pla==="human"){
      document.getElementById("human").style.backgroundColor="#bbb"
      document.getElementById("computer").style.backgroundColor="#222"
      document.getElementById("human").style.color="#222"
      document.getElementById("computer").style.color="#bbb"

    }
    else{
      document.getElementById("human").style.backgroundColor="#222"
      document.getElementById("computer").style.backgroundColor="#bbb"
      document.getElementById("human").style.color="#bbb"
      document.getElementById("computer").style.color="#222"
    }
    init();
  }
  const GameOver=()=>{
    ctx.font=`70px digital`
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvasSide/2, canvasSide*.4); 
    ctx.font=`40px digital`
    ctx.fillStyle = "#ccc";
    ctx.textAlign = "center";
    ctx.fillText(`Your Score is  ${snake.length-1}`, canvasSide/2, canvasSide*.5);
    ctx.fillText(`press space to Restart`, canvasSide/2, canvasSide*.6);
    xspeed=0;
    yspeed=0;
    isGameOver=true; 
  }