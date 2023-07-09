import { ajax } from "../script/module.mjs";

const movieID = localStorage.getItem("movieID");
console.log(movieID);

ajax.onload = function () {
   const json = JSON.parse(ajax.responseText);

   const additionalInfo = document.getElementById("additional-info");

   document.getElementById("movie-title").innerHTML = json[movieID].title;
   document.getElementById("main-image").src = json[movieID].poster_url;
   document.getElementById(
      "background-image"
   ).style.backgroundImage = `url(${json[movieID].poster_url})`;

   for (let i = 1; i <= 2; i++) {
      const createH3 = document.createElement("h3");
      const createP = document.createElement("p");
      const createDiv = document.createElement("div");

      if (i == 1) {
         createH3.textContent = json[movieID].ticket_price;
         createP.textContent = "Ticket Price";
      } else {
         if (json[movieID].age_rating < 13) {
            createH3.textContent = "G";
         } else {
            createH3.textContent = "R 13+";
         }
         createP.textContent = "Age Rating";
      }

      additionalInfo.appendChild(createDiv);
      createDiv.appendChild(createH3);
      createDiv.appendChild(createP);
   }
};
