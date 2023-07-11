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

function closePopUp() {
   const form = document.getElementById("input-payment");
   form.style.display = "none";
}
function openPopUp() {
   const form = document.getElementById("input-payment");
   form.style.display = "flex";
}
function addPayment() {
   let json = JSON.parse(localStorage.getItem("account"));
   if (json.loginStatus === true) {
      alert("Anda harus login terlebih dahulu");
   } else {
      openPopUp();
   }
}
