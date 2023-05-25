let username = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = `${username}`

function showtime(){
    let myClock = document.querySelector("#myClock");
    let d = new Date();
    let weekDay = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];  
    let gun = weekDay [ d.getDay()];
    var date = new Date().toLocaleTimeString();
    myClock.innerHTML = `${date + gun}`
    
}
setInterval(showtime,1000);

