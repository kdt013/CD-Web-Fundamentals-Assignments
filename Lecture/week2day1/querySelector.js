// console.log("hello");

function changeColor(element){
    console.log(element.innerText);
    // element.style.color= element.innerText; 
    //changes button text to color written in text

    // var x = document.querySelector("body"); //targets the body for change
    // var x = document.querySelector("h1"); //targets h1 for change
    var x = document.querySelector("#p1");

    x.style.backgroundColor = element.innerText;
}