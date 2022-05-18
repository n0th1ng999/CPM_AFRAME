const Panel = document.querySelector("#Panel_Signs")
const Buttons = document.querySelectorAll(".button")
const Plane_Image = document.querySelector("#Plane_Image")

Buttons.forEach( button => button.addEventListener("click", (event) => {
  // importante this.id

  
  console.log('asdsadasdas');
  
   Panel.setAttribute("text", `value:  ${button.id} ;  color:  #fff ;width: 3`);
   
  

   Plane_Image.setAttribute("material",`src:/ImagensSigns/${button.id}.jpg`)
   
}))

 console.log(Panel);
