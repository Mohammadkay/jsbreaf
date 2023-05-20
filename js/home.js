import { arr } from "./Register.js";
import { que } from "./EnglishJS.js";
let engbtn = document.getElementById("englishbuttun");
if (engbtn !== null) {
  engbtn.addEventListener("click", function (e) {
    console.log(sessionStorage.getItem("index"));
    window.open("../English.html", "_self");
  });
}
let techbtn = document.getElementById("techbtn");
if (techbtn !== null) {
  techbtn.addEventListener("click", function (e) {
    console.log(sessionStorage.getItem("index"));
    window.open("../technical.html", "_self");
  });
}
