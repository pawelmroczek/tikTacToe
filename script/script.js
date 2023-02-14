const places = document.querySelectorAll(".tiktoe__place");

const points = document.querySelector(".js-game__points");

let Xpoints =0;
let Ypoints = 0;


let placesCheckArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let shape = "O";
let GameEnd = false;




const toggleShape = (shape) => {
  if (shape == "X") {
    return "O";
  } else {
    return "X";
  }
};

const countPoints = (shape) =>{
    if (shape == "X") {
        Xpoints++;
      } else {
        Ypoints++;
      }
}

const checkWin =(shape,placesCheckArray,index)=>{
    if(index%3==1){
        if(placesCheckArray[index-1]==shape &&placesCheckArray[index+1]==shape){
            return true;
        }
    }else if(index%3==0){
        if(placesCheckArray[index+1]==shape &&placesCheckArray[index+2]==shape){
            return true;
        }
    }else if(index%3==2){
        if(placesCheckArray[index-1]==shape &&placesCheckArray[index-2]==shape){
            return true;
        }
    }if(Math.floor(index/3) ==0){
        if(placesCheckArray[index+3]==shape &&placesCheckArray[index+6]==shape){
            return  true;
        }
    }else if(Math.floor(index/3) ==1){
        if(placesCheckArray[index-3]==shape &&placesCheckArray[index+6]==shape){
            return  true;
        }
    }else if(Math.floor(index/3) ==2){
        if(placesCheckArray[index-3]==shape &&placesCheckArray[index-6]==shape){
            return  true;
        }
    }
    if(((Math.floor(index/3) ==0))&&(index%3==0)){
        if(placesCheckArray[index+4]==shape &&placesCheckArray[index+8]==shape){
            return  true;
        }
    }else if((Math.floor(index/3) ==1)&&(index%3==1)){
        if(placesCheckArray[index-4]==shape &&placesCheckArray[index+4]==shape){
            return  true;
        }
    }else if((Math.floor(index/3) ==2)&&(index%3==2)){
        if(placesCheckArray[index-4]==shape &&placesCheckArray[index-8]==shape){
            return  true;
        }
    }if(index==2){
        if(placesCheckArray[index+2]==shape &&placesCheckArray[index+4]==shape){
            return  true;
        }
    }
    else if(index==4){
        if(placesCheckArray[index+2]==shape &&placesCheckArray[index-2]==shape){
            return  true;
        }
    }else if(index==6){
        console.log("piwo");
        if(placesCheckArray[index-2]==shape &&placesCheckArray[index-4]==shape){
            return  true;
        }
    }
};

const draw =(placesCheckArray)=>{
    for (let i = 0; i < 9; i++) {
        if(placesCheckArray[i]==0){
            return false;
        }
    }
    return true;
}

const resetGame = (placesCheckArray,places)=>{
    places.forEach((place)=>{
        place.innerText="";
    })
    for(let i=0;i<9;i++){
        placesCheckArray[i]=0;
    }
    document.querySelector(".game__end").innerText="";
    shape = "O";
    GameEnd=false;
}

const renderPoints = (Xpoints,Ypoints) =>{
    document.querySelector(".js-game__points").innerHTML=`POINTS: X <strong>${Xpoints}</strong> | Y <strong>${Ypoints}</strong>` 
}

const gameReset = document.querySelector(".js-game__reset");
gameReset.addEventListener("click",()=>{
    resetGame(placesCheckArray,places);
});

places.forEach((place, index) => {
  place.addEventListener("click", () => {
    if (place.innerText === "" && !GameEnd) {
      place.innerText = shape;
      placesCheckArray[index] = shape;
      if(draw(placesCheckArray)){
        document.querySelector(".game__end").innerHTML= "DRAW" ;
      }
      if(checkWin(shape,placesCheckArray,index)){
        countPoints(shape);
        document.querySelector(".game__end").innerText= `${shape} WIN`;
        GameEnd=true;
      }
      shape = toggleShape(shape);
      renderPoints(Xpoints,Ypoints);
    }
  });
});

renderPoints(Xpoints,Ypoints);
