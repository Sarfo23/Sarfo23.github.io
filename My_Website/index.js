let typing_ani=document.getElementById("Typing");

const typing_animation =()=>{
    setTimeout(() => {
     typing_ani.textContent="Charles"
    }, 0);
    setTimeout(() => {
     typing_ani.textContent="Developer"
     }, 10000);
    setTimeout(() => {
     typing_ani.textContent="Designer"
     }, 20000);
     setTimeout(() => {
     typing_ani.textContent="Networker"
     }, 30000);  setTimeout(() => {
     typing_ani.textContent="Creator"
     }, 40000);
}
typing_animation ()
setInterval(typing_animation, 50000);
let typing_ani_2=document.getElementsByClassName("typing_ani")[0];

const typing_animation_2 =()=>{
    setTimeout(() => {
     typing_ani_2.textContent="Charles"
    }, 0);
    setTimeout(() => {
     typing_ani_2.textContent="Developer"
     }, 10000);
    setTimeout(() => {
     typing_ani_2.textContent="Designer"
     }, 20000);
     setTimeout(() => {
     typing_ani_2.textContent="Networker"
     }, 30000);  setTimeout(() => {
     typing_ani_2.textContent="Creator"
     }, 40000);
}
typing_animation_2()
setInterval(typing_animation_2, 50000);

// Header scroll
let logo = document.getElementsByClassName("icon")[0];
let head = document.getElementsByTagName("header")[0]
window.addEventListener("scroll",function(){
    if(this.window.scrollY>20){
        head.classList.add("scroll_header")
        logo.computedStyleMap.color="white"

    }
    else{
        head.classList.remove("scroll_header")
        logo.computedStyleMap.color="crimson"


    }
})

// Buttons

let btn_1= document.getElementById("btn11");
let btn_2= document.getElementById("btn12");
let btn_3= document.getElementById("btn13");
let projects_1 =document.getElementsByClassName("Projects_1")[0];
let projects_2 =document.getElementsByClassName("Projects_2")[0];
let projects_3 =document.getElementsByClassName("Projects_3")[0];

const click_btn1=()=>{
    projects_1.style.display="flex"
    projects_2.style.display="none"
    projects_3.style.display="none"
    btn_1.classList.add("active_button");
    btn_2.classList.remove("active_button");
    btn_3.classList.remove("active_button");
}
const click_btn2=()=>{
    projects_1.style.display="none"
    projects_2.style.display="flex"
    projects_3.style.display="none"
    btn_1.classList.remove("active_button");
    btn_2.classList.add("active_button");
    btn_3.classList.remove("active_button");
}
const click_btn3=()=>{
    projects_1.style.display="none"
    projects_2.style.display="none"
    projects_3.style.display="flex"
    btn_1.classList.remove("active_button");
    btn_2.classList.remove("active_button");
    btn_3.classList.add("active_button");
}
btn_1.addEventListener("click", click_btn1);
btn_2.addEventListener("click", click_btn2);
btn_3.addEventListener("click", click_btn3);