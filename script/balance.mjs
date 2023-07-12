import { gopay, ovo, dana } from "./module.mjs";

const accountJson = JSON.parse(localStorage.getItem("account"));
const balanceValue = document.getElementById("balance-nominal-value");

console.log(accountJson);
document.getElementById("balance-title").textContent =
   accountJson.loginStatus == false ? "My Balance" : "account.name";

balanceValue.textContent = `Rp. ${accountJson.balance.toLocaleString()}`;

for (let i = 0; i <= accountJson.paymentMethod.length; i++) {
   const parrent = document.getElementById("payment-method-collection");
   const createImg = document.createElement("img");
   const createP = document.createElement("p");
   const createP2 = document.createElement("p");
   const createDiv = document.createElement("div");
   const createDivParrent = document.createElement("div");

   createDivParrent.className = "card-value";
   createDiv.className = "card-value-number";

   if (accountJson.paymentMethod.length === 0) {
      createImg.src = "";
      createP.textContent = "None";
      createP2.textContent = "";
   } else {
      createImg.src = accountJson.paymentMethod[i].logo;
      createP.textContent = accountJson.paymentMethod[i].paymentNumber;
      createP2.textContent = accountJson.paymentMethod[i].paymentDate;
   }
   createDiv.appendChild(createImg);
   createDiv.appendChild(createP);
   createDivParrent.appendChild(createDiv);
   createDivParrent
      .appendChild(createP2)
      .setAttribute("class", "card-value-date");
   parrent.appendChild(createDivParrent);
}
console.log(accountJson.orderHistory.length);
if (accountJson.orderHistory.length == 0) {
   const createP = document.createElement("p");
   createP.textContent = "Anda Belum Memiliki Riwayat Pembelian";

   document.getElementById("history").append(createP);
} else {
   for (let i = 0; i <= accountJson.orderHistory.length; i++) {
      const DivParrent = document.getElementById("history");
      const createDivParrent = document.createElement("div");
      const createImage = document.createElement("img");
      const createDivChild = document.createElement("div");
      const createH3 = document.createElement("h3");
      const createPDate = document.createElement("p");
      const createPTotal = document.createElement("p");

      createImage.src = accountJson.orderHistory[i].image;
      createH3.textContent = accountJson.orderHistory[i].title;
      createPDate.textContent = accountJson.orderHistory[i].date;
      createPTotal.textContent = `Rp. ${accountJson.orderHistory[
         i
      ].totalTopUp.toLocaleString()}`;

      createDivChild.appendChild(createH3);
      createDivChild.appendChild(createPDate);
      createDivChild.appendChild(createPTotal);
      createDivChild.className = "historyDetail";
      createDivParrent.appendChild(createImage);
      createDivParrent.appendChild(createDivChild);
      createDivParrent.className = "historyChild";
      DivParrent.appendChild(createDivParrent);
   }
}

document
   .getElementById("input-payment")
   .addEventListener("submit", function (event) {
      event.preventDefault();

      const json = JSON.parse(localStorage.getItem("account"));
      const paymentNumber = document.getElementById("nomor").value;

      if (document.getElementById("gopay").checked == true) {
         json.paymentMethod.push(new gopay(paymentNumber));
      } else if (document.getElementById("ovo").checked == true) {
         json.paymentMethod.push(new ovo(paymentNumber));
      } else {
         json.paymentMethod.push(new dana(paymentNumber));
      }

      localStorage.setItem("account", JSON.stringify(json));
      window.location = "../page/balance.html";
   });
