function ticketDetails(ticketMovieID, ticketAtOrderHistory) {
   localStorage.setItem("movieticket", ticketMovieID);
   localStorage.setItem("localOrderHistory", ticketAtOrderHistory);

   window.location = "../page/ticket.html";
}
