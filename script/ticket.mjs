import { ajax, filmSchedule } from "../script/module.mjs";

const jsonAccount = JSON.parse(localStorage.getItem("account"));
const movieTicket = Number(localStorage.getItem("movieticket"));
const orderHistoryIndex = Number(localStorage.getItem("localOrderHistory"));

console.log(JSON.parse(localStorage.getItem("BOOK")));

ajax.onload = () => {
   const json = JSON.parse(ajax.responseText);

   console.log(jsonAccount);
   console.log(orderHistoryIndex);
   const seats = document.getElementById("seats");
   for (
      let i = 0;
      i < jsonAccount.orderHistory[orderHistoryIndex].chair.length;
      i++
   ) {
      seats.innerHTML +=
         jsonAccount.orderHistory[orderHistoryIndex].chair[i] + " ";
   }
   const judulFilm = document.getElementById("judul-film");
   const studio = document.getElementById("studio");
   const movieDate = document.getElementById("movie-date");

   judulFilm.textContent = json[movieTicket].title;
   studio.textContent = jsonAccount.orderHistory[orderHistoryIndex].studio;
   movieDate.textContent = jsonAccount.orderHistory[
      orderHistoryIndex
   ].date.substring(0, 10);
};
filmSchedule.onload = () => {
   const json = JSON.parse(filmSchedule.responseText);
   const movieTime = document.getElementById("movie-time");

   movieTime.textContent = json[movieTicket].jadwal;
};
