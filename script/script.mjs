import { ajax } from "./module.mjs";

ajax.onload = () => {
   const json = JSON.parse(ajax.responseText);

   for (let i = 0; i <= 5; i++) {
      const createDiv = document.createElement("div");
      const createImage = document.createElement("img");
      const createHeader = document.createElement("h2");
      const createHeader3 = document.createElement("h3");

      createDiv.className = "movie";
      createImage.src = json[i].poster_url;
      createHeader.textContent = json[i].title;
      createHeader3.textContent = json[i].age_rating;

      document.getElementById("main-content").appendChild(createDiv);
      createDiv.appendChild(createImage);
      createDiv.appendChild(createHeader);
      createDiv.appendChild(createHeader3);
   }
};
