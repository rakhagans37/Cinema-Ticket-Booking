import { masterCard, visa } from "./module.mjs";

const accountJson = JSON.parse(localStorage.getItem("account"));
const balanceValue = document.getElementById("balance-nominal-value");
const createP = document.createElement("p");

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
