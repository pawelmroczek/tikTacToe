const places = document.querySelectorAll(".tiktoe__place");

let placesCheckArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let shape = "X";
let GameEnd = false;


const toggleShape = (shape) => {
  if (shape == "X") {
    return "O";
  } else {
    return "X";
  }
};

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
    }
};

places.forEach((place, index) => {
  place.addEventListener("click", () => {
    if (place.innerText === "" && !GameEnd) {
      place.innerText = shape;
      placesCheckArray[index] = shape;
      if(checkWin(shape,placesCheckArray,index)){
        document.querySelector(".game__end").innerText= `${shape} WIN`;
        GameEnd=true;
      }
      shape = toggleShape(shape);
    }
  });
});
