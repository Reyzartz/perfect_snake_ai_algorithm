const draw_box=(y,x,color)=>{
    ctx.fillStyle=color;
    ctx.fillRect(y*boxSize,x*boxSize,boxSize,boxSize);
  }
  const draw_grid=()=>{
    positions.forEach((sna,y)=>{
      sna.forEach((s,x)=>{
        ctx.strokeRect(y*boxSize,x*boxSize,boxSize,boxSize);
        
      })
    })
    
  }
  const display=()=>{
    snake.forEach(sna=>{
        positions[sna.x][sna.y]=1;
      })
      if(player!=="human" & c>0)
      aStarRes.forEach(sna=>{
        positions[sna.x][sna.y]=3;
      })
      positions[food.x][food.y]=2;
      positions[snake[0].x][snake[0].y]=2
    positions.forEach((pos,y)=>{
      pos.forEach((p,x)=>{
        if(p==1){
          draw_box(y,x,"#fff")
        }
        else if(p==2){
          draw_box(y,x,"red")
        }
        else if(p==3){
          draw_box(y,x,"#555")
        }
      })
    })
  }