const circleList = document.getElementsByClassName("circle");
const circles = document.querySelector('.circle');
// const ratings = document.getElementsByClassName('ratings');
const footer = document.querySelector("footer");
const primaryContainer = document.querySelector('.primaryContainer');
const finalContainer = document.querySelector(".final-container");
const submitBtn = document.querySelector("input");

function submit(){
    primaryContainer.style.display = "none";
    finalContainer.style.display = "block";
}

console.log(circles);

// for( i = 0 ; i < circleList.length;i++){
//     console.log(circles[i]);
//     // console.log(circleList[i]);
//     // circleList[i].addEventListener('click', ()=>{
//     //     console.log(typeof circleList[i])
//     // })
// 