function myfun() {


    document.querySelector("button").classList.toggle("btn")

    document.querySelector("h3").classList.toggle("extra")




}

document.addEventListener("keypress", function (event) {
    entertrig(event.key)



})

function entertrig(key) {
    switch (key) {
        case "Enter":

            document.querySelector("button").classList.toggle("btn")

            document.querySelector("h3").classList.toggle("extra")



            break;

        default:
            break;

    }

}


function MyFun(name, age) {
    this.name = name;
    this.age = age;

}

var mine = new MyFun("sdgd", 25)
console.log(mine)

function getday() {
    let days = new Date()
    let day = days.getDay()
    let par


    switch (day) {
        case 1:
            par = "Monday"

            break;
        case 2:
            par = "Tuesday"
            break;
        case 3:
            par = "Wednesday"
            break;
        case 4:
            par = "Thursday"
            break;

        case 5:
            par = "Friday"
            break;
        case 6:
            par = "Saturday"
            break;

        case 0:
            par = "Sunday"
            break;






        default:
            break;
    }

    document.getElementById("sar").innerHTML = par
}