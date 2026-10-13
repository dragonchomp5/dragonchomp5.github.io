const menu = document.querySelector("#menu")
const hiddenMenu = document.querySelector("#hiddenMenu")
const hiddenMenuStyle = window.getComputedStyle(hiddenMenu)
const next1 = document.querySelector("#next1")
const container = document.querySelector(".container")
const project1 = document.querySelector("#project1")
const project2 = document.querySelector("#project2")
const project3 = document.querySelector("#project3")
const project1Style = window.getComputedStyle(project1)
const project2Style = window.getComputedStyle(project2)
const project3Style = window.getComputedStyle(project3)
const next2 = document.querySelector("#next2")
const back1 = document.querySelector("#back1")
const back2 = document.querySelector("#back2")

console.log(menu);

menu.addEventListener(
    'click',
    () => {
        if (hiddenMenuStyle.getPropertyValue('display') === 'none') {
            hiddenMenu.style.display = 'block';
            // console.log("Displayed Block");
        } else {
            hiddenMenu.style.display = 'none';
            // console.log("Displayed None");
        }
    }
)
next1.addEventListener(
    'click',
    function name(params) {
        container.style.gridTemplateAreas = '"nav" "info" "skills" "educationExperience" "project2" "footer"';
        project1.style.display = 'none'
        project2.style.display = 'grid'
        // console.log("Going from project 1 to 2");
    } 
)
next2.addEventListener(
    'click',
    function name(params) {
        container.style.gridTemplateAreas = '"nav" "info" "skills" "educationExperience" "project3" "footer"';
        project2.style.display = 'none'
        project3.style.display = 'grid'
        // console.log("Going from project 2 to 3");
    } 
)
back1.addEventListener(
    'click',
    function name(params) {
        container.style.gridTemplateAreas = '"nav" "info" "skills" "educationExperience" "project1" "footer"';
        project2.style.display = 'none'
        project1.style.display = 'grid'
        // console.log("Going from project 2 to 1");
    } 
)
back2.addEventListener(
    'click',
    function name(params) {
        container.style.gridTemplateAreas = '"nav" "info" "skills" "educationExperience" "project2" "footer"';
        project3.style.display = 'none'
        project2.style.display = 'grid'
        // console.log("Going from project 3 to 2");
    } 
)