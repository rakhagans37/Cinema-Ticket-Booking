import { ajax } from "../script/module.mjs";

const movieID = localStorage.getItem("movieID");
console.log(movieID);

ajax.onload = function () {
   const json = JSON.parse(ajax.responseText);
   document.getElementById("movie-title").innerHTML = json[movieID].title;
};
