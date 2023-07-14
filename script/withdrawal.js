class historyWithdrawal {
   constructor(totalWithdrawal) {
      this.type = "withdrawal";
      this.image = "../img/Withdrawal.png";
      this.title = "Withdrawal";
      this.date = new Date();
      this.totalWithdrawal = totalWithdrawal;
   }
}

function confirmPayment() {
   let nominal = Number(
      document.getElementById("total").textContent.replace("Rp. ", "")
   );
   let json = JSON.parse(localStorage.getItem("account"));

   if (json.balance >= nominal) {
      json.balance -= nominal;
      json.orderHistory.push(new historyWithdrawal(nominal));
      localStorage.setItem("account", JSON.stringify(json));
   } else {
      alert("Saldo Anda Tidak Cukup");
   }

   window.location = "balance.html";
}

function cancelPayment() {
   document.getElementById("section").style.display = "None";
}
