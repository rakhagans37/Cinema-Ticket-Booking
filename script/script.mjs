import { ajax } from "./module.mjs";

ajax.onload = () => {
   const json = JSON.parse(ajax.responseText);

   for (let i = 0; i <= json.length; i++) {
      const createDiv = document.createElement("a");
      const createImage = document.createElement("img");
      const createHeader = document.createElement("h2");
      const createHeader3 = document.createElement("h3");

      createDiv.setAttribute("onclick", `chooseMovie(${i})`);
      createDiv.href = "page/movie.html";
      createDiv.className = "movie";
      createDiv.id = json[i].id;
      createImage.src = json[i].poster_url;
      createHeader.textContent = json[i].title;
      createHeader3.textContent = json[i].age_rating;

      document.getElementById("main-content").appendChild(createDiv);
      createDiv.appendChild(createImage);
      createDiv.appendChild(createHeader);
      createDiv.appendChild(createHeader3);
   }
};

export const accountJson = JSON.parse(localStorage.getItem("account"));
document.getElementById("balance-nominal").textContent =
   "Rp. " + accountJson.balance.toLocaleString();
console.log(accountJson);
