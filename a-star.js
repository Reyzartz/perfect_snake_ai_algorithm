const make_graph_astar=()=>{  
   positions.forEach((pos,y)=>{
        pos.forEach((p,x)=>{
                graph[y+1][x+1]=(Math.pow((x-food.x),2)+Math.pow((y-food.y),2));
        })
    })
    snake.forEach(sna=>{
        graph[sna.y+1][sna.x+1]=1000000
    })  
}
const make_graph_reverse_astar=()=>{  
    positions.forEach((pos,y)=>{
         pos.forEach((p,x)=>{
                 graph[y+1][x+1]=(Math.pow((x-food.x),2)+Math.pow((y-food.y),2));
         })
     })
     snake.forEach(sna=>{
         graph[sna.y+1][sna.x+1]=-1
     })  
 }
const aStar=(y,x,pos=[])=>{
    make_graph_astar()
    x=x+1;
    y=y+1;
    let xx=x;
    let yy=y; 
    let min=10000000;
    let k=Math.pow(gridSize,2);
    graph[yy][xx]=1000000;
    let count=0;
    let l=snake.length-1
    while(min!=0 && k>0){
        m1=graph[yy][xx-1];
        m2=graph[yy][xx+1];
        m3=graph[yy-1][xx];
        m4=graph[yy+1][xx];
        min=Math.min(m1,m2,m3,m4);
        if(min===m1){
        x=xx-1;
        y=yy;
        }
        else if(min===m2){
        x=xx+1;
        y=yy;
        }
        else if(min===m3){
        x=xx;
        y=yy-1;
        }
        else if(min===m4){
        x=xx;
        y=yy+1;
        }
        graph[yy][xx]=1000000;
        graph[y][x]=1000000;
        xx=x;
        yy=y;
        pos.push({
            x:x-1,
            y:y-1,
            val:min
        });
        k--;
        if(count>l){
            //console.log(count,l);
            
            //graph[pos[count-l].y+1][pos[count-l].x+1]=Math.pow((pos[count-l].y+1-food.y),2)+Math.pow((pos[count-l].x+1-food.x),2)
        }
        count++;
    }
    console.log(graph);
    console.log(pos);
    if(pos[pos.length-1].x===food.x && pos[pos.length-1].y===food.y){
        return pos;
    } 
    else{
        console.log("fail");
       return pos
    }
}
const reverse_aStar=(y,x,pos=[])=>{
    make_graph_reverse_astar();
    x=x+1;
    y=y+1;
    let xx=x;
    let yy=y;
    let max=-1;
    let k=gridSize*gridSize;
    graph[yy][xx]=-1;
    let count=0;
    let l=snake.length-1
    while(max!=0 && k>0){
        m1=graph[yy][xx-1];
        m2=graph[yy][xx+1];
        m3=graph[yy-1][xx];
        m4=graph[yy+1][xx];
        max=Math.max(m1,m2,m3,m4);
        if(max===m1){
        x=xx-1;
        y=yy;
        }
        else if(max===m2){
        x=xx+1;
        y=yy;
        }
        else if(max===m3){
        x=xx;
        y=yy-1;
        }
        else if(max===m4){
        x=xx;
        y=yy+1;
        if(max==-1){
            console.log("bazinga");
            
        }
        }
        graph[yy][xx]=-1;
        graph[y][x]=-1;
        xx=x;
        yy=y;
        pos.push({
            x:x-1,
            y:y-1,
            val:max
        }); 
        k--;
        if(count>l){
            //graph[pos[count-l].y+1][pos[count-l].x+1]=Math.pow((pos[count-l].y+1-food.y),2)+Math.pow((pos[count-l].x+1-food.x),2)
        }
        count++;
        console.log(graph);
        console.log(pos);
    }
    
    if(pos[pos.length-1].x===food.x && pos[pos.length-1].y===food.y){
        return pos;
    } 
    else{
        console.log("fail");
       return pos
    }
}
























// const hamilton_cycle=(y,x)=>{
//     let path=new Array(gridSize+2);
//     path[0]=path[gridSize+1]=new Array(gridSize+2).fill(1)
//     path[gridSize+1]=new Array(gridSize+2).fill(1)
//     for(let i=1;i<gridSize+1;i++){
//         path[i]=new Array(gridSize+2).fill(0)
//         path[i][0]=1;
//         path[i][gridSize+1]=1;
//     }
//     snake.forEach(sna=>{
//         path[sna.y+1][sna.x+1]=1
//     })
//     console.log(path);
//     let k=gridSize*gridSize;
//     let pos=[];
//     x=x+1;
//     y=y+1;
//     let xx=x;
//     let yy=y; 
//     let m1,m2,m3,m4,m1d,m2d,m3d,m4d;
//     let br=0;
//     m1d=0,m2d=0,m3d=0,m4d=0;
//     while(k>0 && br<5000){
//         m1=path[yy][xx-1];
//         m2=path[yy][xx+1];
//         m3=path[yy-1][xx];
//         m4=path[yy+1][xx];
//         if(m1===0 && m1d==0){
//             x=xx-1;
//             y=yy;
//             m1d=1;
//         }
//         else if(m2===0 && m2d==0){
//             x=xx+1;
//             y=yy;
//             m2d=1;
//         }
//         else if(m3===0 && m3d==0){
//             x=xx;
//             y=yy-1;
//             m3d=1;
//         }
//         else if(m4===0 && m4d==0){
//             x=xx;
//             y=yy+1;
//             m4d=1;
//         }
        
//         if(!(x===xx && y===yy)){
//             pos.push({
//                 x:x-1,
//                 y:y-1,
//                 m1d,
//                 m2d,
//                 m3d,
//                 m4d
//             })
//             xx=x;
//             yy=y;
//             path[yy][xx]=1;
//             m1d=0,m2d=0,m3d=0,m4d=0;
//             k--;
//         }
//         else{
//             console.log("el");
//             path[yy][xx]=0;
//             xx=pos[pos.length-1].x;
//             yy=pos[pos.length-1].y;
//             m1d=pos[pos.length-1].m1d;
//             m2d=pos[pos.length-1].m2d;
//             m3d=pos[pos.length-1].m3d;
//             m4d=pos[pos.length-1].m4d;
//             pos.pop();
//             k++;
//         }
//         br++;
//         console.log(path);
//         console.log(pos)
//     }
    
//     console.log(pos);
//     return pos;
// }
