const circleList = document.getElementsByClassName("circle");
// const circle = document.querySelectorAll(".circle");
const footer = document.querySelector("footer");
const primaryContainer = document.querySelector('.primaryContainer');
const finalContainer = document.querySelector(".final-container");
const submitBtn = document.querySelector("input");
const selectedRatings = document.querySelector('.selected-rating');


let rating = 0;

function submit(){
    primaryContainer.style.display = "none";
    finalContainer.style.visibility = "visible";
    selectedRatings.innerText = "You selected " + rating + " out of 5";
    selectedRatings.style.fontSize = "14px";
    selectedRatings.style.fontWeight="500";
    selectedRatings.style.color = "hsla(25, 97%, 50%,0.6)";
    // console.log(rating)
}

submitBtn.addEventListener("click",submit);

circleList[0].addEventListener("click",()=>{
    circleList[0].style.backgroundColor ="hsl(25, 97%, 53%)";
    rating = circleList[0].innerText;

    for( i = 0; i < circleList.length;i++){
        if(i==0)
            continue
        else{
            const circle = getComputedStyle(circleList[i])
            const bgColor = circle.getPropertyValue("background-color");    //getPropertyValue returns value in rgb values for color,background-colro
            if(bgColor == "rgb(251, 116, 19)"){                               // rgb value for hsl(25, 97%, 53%)
                circleList[i].style.backgroundColor = "hsl(213, 19%, 18%)";   // changing the background color to original state.
            }

        }
    }

})
circleList[1].addEventListener("click",()=>{
    circleList[1].style.backgroundColor ="hsl(25, 97%, 53%)";
    rating = circleList[1].innerText;
    for( i = 0; i < circleList.length;i++){
        if(i==1)
            continue
        else{
            const circle = getComputedStyle(circleList[i])
            const bgColor = circle.getPropertyValue("background-color");    //getPropertyValue returns value in rgb values for color,background-colro
            if(bgColor == "rgb(251, 116, 19)"){                               // rgb value for hsl(25, 97%, 53%)
                circleList[i].style.backgroundColor = "hsl(213, 19%, 18%)";   // changing the background color to original state.
            }

        }
    }

})

circleList[2].addEventListener("click",()=>{
    circleList[2].style.backgroundColor ="hsl(25, 97%, 53%)";
    rating = circleList[2].innerText;
    for( i = 0; i < circleList.length;i++){
        if(i==2)
            continue
        else{
            const circle = getComputedStyle(circleList[i])
            const bgColor = circle.getPropertyValue("background-color");    //getPropertyValue returns value in rgb values for color,background-colro
            if(bgColor == "rgb(251, 116, 19)"){                               // rgb value for hsl(25, 97%, 53%)
                circleList[i].style.backgroundColor = "hsl(213, 19%, 18%)";   // changing the background color to original state.
            }

        }
    }
})

circleList[3].addEventListener("click",()=>{
    circleList[3].style.backgroundColor ="hsl(25, 97%, 53%)";
    rating = circleList[3].innerText;
    for( i = 0; i < circleList.length;i++){
        if(i==3)
            continue
        else{
            const circle = getComputedStyle(circleList[i])
            const bgColor = circle.getPropertyValue("background-color");    //getPropertyValue returns value in rgb values for color,background-colro
            if(bgColor == "rgb(251, 116, 19)"){                               // rgb value for hsl(25, 97%, 53%)
                circleList[i].style.backgroundColor = "hsl(213, 19%, 18%)";   // changing the background color to original state.
            }

        }
    }
})

circleList[4].addEventListener("click",()=>{
    circleList[4].style.backgroundColor ="hsl(25, 97%, 53%)";
    rating = circleList[4].innerText;
    for( i = 0; i < circleList.length;i++){
        if(i==4)
            continue
        else{
            const circle = getComputedStyle(circleList[i])
            const bgColor = circle.getPropertyValue("background-color");    //getPropertyValue returns value in rgb values for color,background-colro
            if(bgColor == "rgb(251, 116, 19)"){                               // rgb value for hsl(25, 97%, 53%)
                circleList[i].style.backgroundColor = "hsl(213, 19%, 18%)";   // changing the background color to original state.
            }

        }
    }
})

