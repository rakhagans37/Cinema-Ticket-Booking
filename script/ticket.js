console.log(localStorage);
function refund() {
   const orderHistoryIndex = Number(localStorage.getItem("localOrderHistory"));
   const jsonAccount = JSON.parse(localStorage.getItem("account"));
   const jsonBook = JSON.parse(localStorage.getItem("BOOK"));
   const movieID = Number(localStorage.getItem("movieticket"));
   const movieHours = document.getElementById("movie-time").textContent;
   const movieTime = new Date();
   const price = jsonAccount.orderHistory[orderHistoryIndex].totalPrice;
   movieTime.setHours(
      movieHours.substring(0, 2),
      movieHours.substring(3, 5),
      0
   );
   const now = new Date();
   const seats = jsonAccount.orderHistory[orderHistoryIndex].chair;

   if (Date.parse(now) < Date.parse(movieTime)) {
      for (let i = 0; i <= seats.length; i++) {
         let bookIndex = jsonBook[movieID][
            movieTime.toLocaleDateString()
         ].indexOf(seats[i]);

         console.log(bookIndex);
         jsonBook[movieID][movieTime.toLocaleDateString()].splice(
            bookIndex,
            bookIndex + 1
         );
      }
      jsonAccount.balance += price;
      jsonAccount.orderHistory.splice(orderHistoryIndex);
   } else {
      alert("Permintaan Refund Gagal, Karena Telah Melewati Jam Tayang");
   }

   localStorage.setItem("account", JSON.stringify(jsonAccount));
   localStorage.setItem("BOOK", JSON.stringify(jsonBook));
   console.log(jsonBook);
   alert("Refund Berhasil");

   window.location = "balance.html";
}
