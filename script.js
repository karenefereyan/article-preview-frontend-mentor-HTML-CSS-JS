const showDiv = document.getElementById("floating-share");
const hoverBtn = document.querySelector(".hoverBtn");
let positionedTriangle;

const remove = document.querySelector(".removeShare");

hoverBtn.addEventListener("click", () => {
     showDiv.classList.toggle("showDiv");
     positionedTriangle= window.StyleSheet(
        document.querySelector('.stats'), ':before'
     ).setProperty("display", "block");
    
});

remove.addEventListener("click", () => {
    showDiv.classList.remove("showDiv");
})