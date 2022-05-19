const Buttons = document.querySelectorAll(".button")
const Panels = document.querySelectorAll(".panel")

Buttons.forEach( button => button.addEventListener("click", (event) => {
   
  Panels.forEach(Panel => Panel.setAttribute("src",`#aslVID_${button.id}`) )  
   
}))


