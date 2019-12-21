const newFoodPos=()=>{
    food.x=Math.floor(Math.random()*gridSize);
    food.y=Math.floor(Math.random()*gridSize);
    snake.forEach(sna=>{
      if(food.x===sna.x && food.y===sna.y){
        newFoodPos()
      }
    })
    if(player!=='human'){
      //make_graph();
      aStarRes=aStar(snake[0].y,snake[0].x);
      //aStarRes=hamilton_cycle(snake[0].y,snake[0].x);
    }
    if(aStarRes===null && c>0){
      c--;
      isGameOver=true;
      isGameStart=false;
      newFoodPos()
    }
  }
  