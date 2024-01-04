var d = new Date();
var t = d.getUTCHours(); 

if (t >= 5 && t < 12) {
    alert("Good Morning!");
} else if (t >= 12 && t < 17) {
    alert("Good Afternoon!");
} else if (t >= 17 && t < 20) {
    alert("Good Evening!");
} else {
    alert("Good Night!");
}
