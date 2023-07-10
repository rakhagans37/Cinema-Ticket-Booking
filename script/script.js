function chooseMovie(movieID) {
   console.log(movieID);
   localStorage.setItem("movieID", movieID);
   window.location = "page/movie.html";
}

document
   .getElementById("input-nominal")
   .addEventListener("submit", function (event) {
      event.preventDefault();
      let nominal = Number(document.getElementById("nominal").value);
      let json = JSON.parse(localStorage.getItem("account"));

      json.balance += nominal;
      localStorage.setItem("account", JSON.stringify(json));

      window.location = "balance.html";
   });
