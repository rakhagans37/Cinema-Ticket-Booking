class historyMovie {
   constructor(studio, title, movieID, chair) {
      this.type = "movie";
      this.movieID = movieID;
      this.title = title;
      this.date = new Date();
      this.studio = studio;
      this.chair = chair;
   }
}

function checkBoxLimit() {
   var checkBoxGroup = document.forms["choose-chair"]["chair"];
   var limit = 6;
   for (var i = 0; i < checkBoxGroup.length; i++) {
      checkBoxGroup[i].onclick = function () {
         var checkedcount = 0;
         for (var i = 0; i < checkBoxGroup.length; i++) {
            checkedcount += checkBoxGroup[i].checked ? 1 : 0;
         }
         if (checkedcount > limit) {
            alert("Maksimal pemesanan adalah " + limit + " kursi.");
            this.checked = false;
         }
         console.log(checkedcount);
         localStorage.setItem("chair_total", checkedcount);
      };
   }
}

checkBoxLimit();

function cancelPayment() {
   document.getElementById("section").style.display = "None";
}

function closePopUp() {
   document.getElementById("section-data").style.display = "None";
}

const movieID = localStorage.getItem("movieID");
function confirmPayment() {
   let nominal = Number(
      document.getElementById("total").textContent.replace("Rp. ", "")
   );
   let chair = document.getElementById("chair").textContent.split(",");
   let date = new Date();
   let title = document.getElementById("payment-number").textContent;
   let studio = document.getElementById("studio").textContent;
   let book = JSON.parse(localStorage.getItem("BOOK"));
   let json = JSON.parse(localStorage.getItem("account"));

   if (json.balance < nominal) {
      alert("Uang anda tidak cukup, silahkan topup");
   } else {
      json.balance -= nominal;
      if (date.toLocaleDateString() in book[`${movieID}`] === false) {
         console.log(book[`${movieID}`]);
         book[`${movieID}`][date.toLocaleDateString()] = [];
      }
      for (let i = 0; i < chair.length; i++) {
         book[`${movieID}`][date.toLocaleDateString()].push(chair[i]);
         localStorage.setItem("BOOK", JSON.stringify(book));
      }
      json.orderHistory.push(new historyMovie(studio, title, movieID, chair));
      localStorage.setItem("account", JSON.stringify(json));
      window.location = "balance.html";
   }
}
