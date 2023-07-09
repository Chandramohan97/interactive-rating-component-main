const circleList = document.getElementsByClassName("circle");
const ratings = document.getElementsByClassName('ratings');
// const circle = document.querySelectorAll(".circle");
const footer = document.querySelector("footer");
const primaryContainer = document.querySelector('.primaryContainer');
const finalContainer = document.querySelector(".final-container");
const submitBtn = document.querySelector("input");

function submit(){
    primaryContainer.style.display = "none";
    finalContainer.style.display = "block";
}



circleList[0].addEventListener("click",()=>{
    circleList[0].style.backgroundColor ="hsl(25, 97%, 53%)";

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

