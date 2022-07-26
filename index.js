let temp = 100;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    for (let j = 1; j <= 10; j++) {
      boxes(temp);
      temp--;
    }
  } else {
    temp = temp - 9;
    for (let j = 1; j <= 10; j++) {
      boxes(temp);
      temp++;
    }
    temp = temp - 11;
  }
}

function boxes(i) {
  let div = document.createElement("div");
  div.setAttribute("id", `box${i}`);

  let h1 = document.createElement("h2");
  h1.textContent = i;

  div.append(h1);
  if (i === 1) {
    h1.textContent = "START";
    div.setAttribute("class", "base");
  } else if (i === 100) {
    h1.textContent = "END";
    div.setAttribute("class", "base");
  } else if (i % 2 == 0) {
    div.setAttribute("class", "type1 boxes");
  } else {
    div.setAttribute("class", "type2 boxes");
  }

  document.getElementById("board").append(div);
}

document.getElementById("play").addEventListener("click", () => {
  window.location.href = "#board";
});

document.getElementById("roll").addEventListener("click", () => {
  setTimeout(() => {
    let n = Math.ceil(Math.random() * 6);
    document.getElementById("diceDisplay").textContent = n;
    move(n);
  }, 100);
});




var tem;
var clean;
var free = 0;
function move(n) {
  if (n === 1 && free === 0) {
    tem = 1;
    free++;
    let id = `box${tem}`;
    let img = document.createElement("img");
    img.src = "./images/spot1.png";
    img.setAttribute("id", `img${tem}`);
    img.setAttribute("class", "spot");

    document.getElementById(id).append(img);

    clean = tem;
    let myAudio = document.querySelector("#event");
    myAudio.play();
    setTimeout(() => {
      alert("free");
    }, 100);
  } else if (free !== 0 && tem+n <=100) {
    var z;
    for (let i = 1; i <= n; i++) {
        z = 700* i
      setTimeout(() => {
        if (clean !== undefined) {
          let rem = `img${clean}`;
          console.log(rem);
          let x = document.getElementById(rem);
          x.remove();
        }
        tem++;
        let id = `box${tem}`;
        let img = document.createElement("img");
        img.src = "./images/spot1.png";
        img.setAttribute("id", `img${tem}`);
        img.setAttribute("class", "spot");

        document.getElementById(id).append(img);
        clean = tem;
        let myAudio = document.querySelector("#step");
        myAudio.play();
      }, z);
    }

    setTimeout(()=>{
        console.log(tem)
        if(tem===15){
            tem=97;
            teleport(tem)
            tem++
        }
        if(tem===18){
            tem=59;
            teleport(tem)
        }
        if(tem===53){
            tem=89;
            teleport(tem)
        }
        if(tem===75){
            tem=94;
            teleport(tem)
        }
        if(tem===99){
            tem=4;
            snakeTeleport(tem)
        }
        if(tem===95){
            tem=65;
            snakeTeleport(tem)
        }
        if(tem===55){
            tem=11;
            snakeTeleport(tem)
        }
        if(tem===69){
            tem=29;
            snakeTeleport(tem)
        }
        if(tem===74){
            tem=34;
            snakeTeleport(tem)
        }
        if(tem===100){
            let myAudio = document.querySelector("#won");
            myAudio.play(); 
        }
    },z+700)
    
  } else {
    let myAudio = document.querySelector("#fail");
    myAudio.play();
  }
}

function teleport(){
   
        let rem = `img${clean}`;
        console.log(rem);
        let x = document.getElementById(rem);
        x.remove();
      
        setTimeout(()=>{

        let id = `box${tem}`;
        let img = document.createElement("img");
        img.src = "./images/spot1.png";
        img.setAttribute("id", `img${tem}`);
        img.setAttribute("class", "spot");
    
        document.getElementById(id).append(img);
    
        clean = tem;
        let myAudio = document.querySelector("#ladder");
        myAudio.play();
    },400)
   
}
function snakeTeleport(){
    if (clean !== undefined) {
        let rem = `img${clean}`;
        console.log(rem);
        let x = document.getElementById(rem);
        x.remove();
      }
    setTimeout(()=>{

        let id = `box${tem}`;
        let img = document.createElement("img");
        img.src = "./images/spot1.png";
        img.setAttribute("id", `img${tem}`);
        img.setAttribute("class", "spot");
    
        document.getElementById(id).append(img);
    
        clean = tem;
        let myAudio = document.querySelector("#snake");
        myAudio.play();
    },400)
}