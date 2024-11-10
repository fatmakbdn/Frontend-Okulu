let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.scripts[0];
value = document.links;
value = document.links[document.links.length - 1].getAttribute("class");


// Eleman oluşturma

const button = document.createElement("a");
button.id = "denemeButon";
button.className = "btn btn-danger";
button.href = "http://wwww.google.com";
button.target = "_blank";
button.textContent = "Google'a git";
const divSec = document.querySelector("#denemeDiv");
divSec.appendChild(button);

value = document.getElementById("denemeButon");

value.addEventListener("click", function() {
    console.log("Tıklama işlemi gerçekleşti");
});



console.log(value);