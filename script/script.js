const places = document.querySelectorAll(".tiktoe__place");

let placesCheckArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let shape = "X";

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
    }
};

places.forEach((place, index) => {
  place.addEventListener("click", () => {
    if (place.innerText === "") {
      place.innerText = shape;
      placesCheckArray[index] = shape;
      if(checkWin(shape,placesCheckArray,index)){
        document.querySelector(".game__end").innerText= `${shape} WIN`;
      }
      shape = toggleShape(shape);
    }
  });
});
