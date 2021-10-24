let numX=3;
let numY=3;

// 陣列 list 
let bs = [];

function setup() {
  createCanvas(400, 400);

  for(let i=0;i<numX;i=i+1){
    for(let j=0;j<numY;j=j+1){
      // 把東西塞入 [] list 中的方法
      // xxx.push(新建的物件)
      bs.push(new Ball(i*width/numX + width/numX/2,
                       j*height/numY + height/numY/2));
    }
  }
}
 // 持續重複執行
function draw() {
  background(220); 
  // 讓袋子中的 每物件 各自執行動作
  // xxx.forEach((v)=>{ v.display(); });
  bs.forEach((v)=>{
    v.display();
  });
}

