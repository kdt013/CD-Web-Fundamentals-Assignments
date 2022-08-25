function donate(element) {
    var donate = document.querySelector(".donate");

    donate.remove();
}

var pepper = 3;
function pepperPets(){
    var spanTag = document.querySelector("#pepperPets");

    pepper++;
    console.log(pepper);

    spanTag.innerText = pepper;
}

var bruce = 5;
function brucePets(){
    var spanTag = document.querySelector("#brucePets");

    bruce++;
    console.log(bruce);

    spanTag.innerText = bruce;
}

var oscar = 8;
function oscarPets(){
    var spanTag = document.querySelector("#oscarPets");

    oscar++;
    console.log(oscar);

    spanTag.innerText = oscar;
}


function animal(element){

    var animal = document.querySelector("#value");
    alert("You are looking for a: " + element.value);  
}

