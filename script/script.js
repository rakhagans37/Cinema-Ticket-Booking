const totalChair = 0;
const choosenChair = [];
class historyTopUp {
   constructor(totalTopUp) {
      this.type = "topup";
      this.image = "../img/income.png";
      this.title = "Top Up";
      this.date = new Date();
      this.totalTopUp = totalTopUp;
   }
}

function chooseMovie(movieID) {
   console.log(movieID);
   localStorage.setItem("movieID", movieID);
   window.location = "page/movie.html";
}

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
   if (json.loginStatus === false) {
      alert("Anda harus login terlebih dahulu");
   } else {
      openPopUp();
   }
}

function confirmPayment() {
   let nominal = Number(
      document.getElementById("total").textContent.replace("Rp. ", "")
   );
   let json = JSON.parse(localStorage.getItem("account"));

   json.balance += nominal;
   json.orderHistory.push(new historyTopUp(nominal));
   localStorage.setItem("account", JSON.stringify(json));

   window.location = "balance.html";
}

function cancelPayment() {
   document.getElementById("section").style.display = "None";
}
