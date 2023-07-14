import { ajax } from "./module.mjs";

ajax.onload = () => {
   const json = JSON.parse(ajax.responseText);

   for (let i = 0; i <= json.length; i++) {
      const createDiv = document.createElement("a");
      const createImage = document.createElement("img");
      const createHeader = document.createElement("h2");
      const createHeader3 = document.createElement("h3");
      const createRatingDiv = document.createElement("div");
      const createRating = document.createElement("p");

      createDiv.setAttribute("onclick", `chooseMovie(${i})`);
      createRatingDiv.className = "rating";
      createDiv.href = "page/movie.html";
      createDiv.className = "movie";
      createDiv.id = json[i].id;
      createImage.src = json[i].poster_url;
      createHeader.textContent = json[i].title;
      if (Number(json[i].age_rating) < 13) {
         createRating.textContent = `A ${json[i].age_rating}+`;
      } else if (Number(json[i].age_rating) >= 18) {
         createRating.textContent = `D ${json[i].age_rating}+`;
      } else {
         createRating.textContent = `R ${json[i].age_rating}+`;
      }
      document.getElementById("main-content").appendChild(createDiv);
      createRatingDiv.appendChild(createRating);
      createDiv.appendChild(createImage);
      createDiv.appendChild(createHeader);
      createDiv.appendChild(createHeader3);
      createDiv.appendChild(createRatingDiv);
   }
};

const accountJson = JSON.parse(localStorage.getItem("account"));
document.getElementById("balance-nominal").textContent =
   "Rp. " + accountJson.balance.toLocaleString();
console.log(accountJson);
