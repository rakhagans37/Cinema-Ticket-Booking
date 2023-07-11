import { gopay } from "../script/module.mjs";

console.log(localStorage.getItem("account"));

const json = JSON.parse(localStorage.getItem("account"));

if (json.loginStatus === false) {
   document.getElementById("input-nominal").style.display = "flex";
} else {
   document.getElementById("input-nominal2").style.display = "flex";
   printSavedPayment();
}

function printSavedPayment() {
   if (json.paymentMethod.length !== 0) {
      for (let i = 0; i <= json.paymentMethod.length; i++) {
         const parent = document.getElementById("payment-radio2");
         const createDiv = document.createElement("div");
         const createLabel = document.createElement("label");
         const createInput = document.createElement("input");

         createDiv.className = "radio-child";
         createLabel.setAttribute("for", `${json.paymentMethod[i].method}`);
         createInput.setAttribute("type", "radio");
         createInput.setAttribute("value", `${i}`);
         createInput.setAttribute("id", `${i}`);
         createInput.setAttribute("name", "payment-method-choose");

         createLabel.appendChild(createInput);
         createLabel.textContent += json.paymentMethod[i].paymentNumber;
         createDiv.appendChild(createLabel);
         parent.appendChild(createDiv);
      }
   } else {
      const parent = document.getElementById("payment-radio2");
      const createDiv = document.createElement("div");
      const createLabel = document.createElement("label");
      const createInput = document.createElement("input");

      createDiv.className = "radio-child";
      createLabel.setAttribute("for", `gopay1`);
      createInput.setAttribute("type", "radio");
      createInput.setAttribute("value", `gopay1`);
      createInput.setAttribute("id", `gopay1`);
      createInput.setAttribute("name", "payment-method-choose");
      createInput.setAttribute("required", "");

      createLabel.appendChild(createInput);
      createLabel.innerHTML += " NONE";
      createDiv.appendChild(createLabel);
      parent.appendChild(createDiv);
   }
}

document
   .getElementById("input-nominal")
   .addEventListener("submit", function (event) {
      event.preventDefault();
      const tanggal = new Date();
      const method =
         document.getElementById("gopay").checked == true
            ? document.getElementById("gopay").value
            : document.getElementById("ovo").checked == true
            ? document.getElementById("ovo").value
            : document.getElementById("dana").value;
      const jumlah = document.getElementById("nominal").value;
      const nomor = document.getElementById("nomor").value;

      document.getElementById("section").style.display = "block";
      document.getElementById(
         "payment-number"
      ).textContent = `${method} ${nomor}`;
      document.getElementById("payment-id").textContent = `Payment id : #${
         method.substr(0, 1) +
         nomor.substr(1, 6) +
         tanggal.toISOString().substring(0, 4) +
         jumlah
      }`;
      document.getElementById(
         "tanggal-payment"
      ).textContent = `${tanggal.toLocaleDateString()}`;
      document.getElementById(
         "waktu-payment"
      ).textContent = `${tanggal.getHours()}:${tanggal.getMinutes()} WIB`;
      document.getElementById("jumlah").textContent = `Rp. ${jumlah}`;
      document.getElementById("total").textContent = `Rp. ${jumlah}`;
   });

document
   .getElementById("input-nominal2")
   .addEventListener("submit", function (event) {
      event.preventDefault();
      let nominal = Number(document.getElementById("nominal2").value);
      let json = JSON.parse(localStorage.getItem("account"));

      json.balance += nominal;
      localStorage.setItem("account", JSON.stringify(json));

      window.location = "balance.html";
   });
