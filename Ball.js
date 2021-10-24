// 物件導向格式
class Ball{
  // 建構
  constructor(x,y,s=20){
    this.x=x;
    this.y=y;
    this.size=s;
    this.movex =random(-1.0,1.0);
    this.movey =random(-1.0,1.0);
  }
  // 能力為何
  display(){
    this.selfbounce();
    this.bounce();
    this.move();
    circle(this.x,this.y,this.size);
  }
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
  bounce(){
    // 上方反彈
    if (this.y-this.size/2<0){
      this.movey = -1*this.movey;
    }
    // 上方反彈
    if (this.y+this.size/2>height){
      this.movey = -1*this.movey;
    }
    // 左方反彈
    if (this.x-this.size/2<0){
      this.movex = -1*this.movex;
    }
    // 上方反彈
    if (this.x+this.size/2>width){
      this.movex = -1*this.movex;
    }
  }
  // 物件彼此反彈
  selfbounce(){
    bs.forEach((nb)=>{
      if (nb === this){
        // 若不是自己
        console.log('a');
      }else{
        // 若x方向距離太近
        if (abs(this.x-nb.x)<this.size && 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movex=-1*this.movex;
           }
        if (abs(this.y-nb.y)<this.size&& 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movey=-1*this.movey;
           }
      }
      
      });
  }
}