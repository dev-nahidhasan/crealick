let sidebar = document.querySelector(".sidebar");
let homeIcon = document.getElementById("homeIcon");
let homeIconBar = document.getElementById("homeIconBar");
let jobIconBar = document.getElementById("jobIconBar");
let frndIconBar = document.getElementById("frndIconBar");
let payIconBar = document.getElementById("payIconBar");
let walIconBar = document.getElementById("walIconBar");


homeIconBar.onclick = function () {
    homeIcon.classList.toggle("icon-clicked")
    window.location.href = "https://crealick.com";
}
jobIconBar.onclick = function () {
    jobIcon.classList.toggle("icon-clicked")
}
frndIconBar.onclick = function () {
    frndIcon.classList.toggle("icon-clicked")
}
payIconBar.onclick = function () {
    payIcon.classList.toggle("icon-clicked")
}
walIconBar.onclick = function () {
    walIcon.classList.toggle("icon-clicked")
}
