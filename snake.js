function box(x,y,color="white"){
    this.x=x
    this.y=y
    this.color=color
}


const updatePos=()=>{
    snake.map((sna,i)=>{
      prevSna[i].x=sna.x
      prevSna[i].y=sna.y
      if(i===0){
        sna.x+=xspeed;
        sna.y+=yspeed;
      }
      else if(i>0){
         sna.x=prevSna[i-1].x
         sna.y=prevSna[i-1].y
      }
      
    })
    positions.map(pos=>{
      pos.fill(0)
    })
  }
  const autoUpdatePos=()=>{
    snake.map((sna,i)=>{
      prevSna[i].x=sna.x
      prevSna[i].y=sna.y
      if(i===0){
        sna.x=aStarRes[0].x;
        sna.y=aStarRes[0].y;
      }
      else if(i>0){
         sna.x=prevSna[i-1].x
         sna.y=prevSna[i-1].y
      }
    })
    count++;
    aStarRes.shift();
    positions.map(pos=>{
      pos.fill(0)
    })
  }