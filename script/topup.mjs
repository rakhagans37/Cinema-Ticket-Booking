import { gopay } from "../script/module.mjs";

console.log(localStorage.getItem("account"));

const json = JSON.parse(localStorage.getItem("account"));

if (json.loginStatus === true) {
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
