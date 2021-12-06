let d = new Date();
let day = d.getDay();
let hour = d.getHours();

if ((day > 0 && hour >= 12 && hour < 22) || (day === 0 && hour >= 12 && hour < 20)) {
    document.querySelector("#openClose").innerHTML = "We Are Open!";
} else {
    document.querySelector("#openClose").innerHTML = "Closed.";
}
