import { ajax, filmSchedule } from "./module.mjs";

const movieID = localStorage.getItem("movieID");
let movieName;
let price;
let date;
let time;
let age_rating;
ajax.onload = function () {
   const json = JSON.parse(ajax.responseText);
   movieName = json[movieID].title;
   price = json[movieID].ticket_price;
   age_rating = json[movieID].age_rating;

   const judul = document.getElementById("judul-film");
   const tanggal = document.getElementById("tanggal");
   const waktuValue = new Date();

   judul.textContent = json[movieID].title;
   tanggal.textContent = waktuValue.toLocaleDateString();
};

filmSchedule.onload = function () {
   const jsonSchedule = JSON.parse(filmSchedule.responseText);
   const studio = document.getElementById("nomor-studio");
   const waktu = document.getElementById("waktu");
   const waktuValue = new Date();
   waktuValue.setHours(
      jsonSchedule[movieID].jadwal.substring(0, 2),
      jsonSchedule[movieID].jadwal.substring(3, 6),
      0
   );

   console.log(waktuValue);
   studio.textContent = `Studio ${jsonSchedule[movieID].studio}`;
   waktu.textContent = `${jsonSchedule[movieID].jadwal}`;
};

function confirmPayment(chairChoosen) {
   const tanggal = new Date();
   let i = 0;
   console.log(chairChoosen[i]);

   document.getElementById("chair").innerHTML = "";
   for (let i = 0; i < chairChoosen.length; i++) {
      if (i !== chairChoosen.length - 1) {
         document.getElementById("chair").innerHTML += `${chairChoosen[i]},`;
      } else {
         document.getElementById("chair").innerHTML += `${chairChoosen[i]}`;
      }
   }
   document.getElementById("section").style.display = "block";
   document.getElementById("payment-number").textContent = `${movieName}`;
   document.getElementById("payment-id").textContent = `Payment id : #${
      movieName.substring(0, 6) + tanggal.toISOString().substring(0, 4)
   }`;
   document.getElementById(
      "tanggal-payment"
   ).textContent = `${tanggal.toLocaleDateString()}`;
   document.getElementById(
      "waktu-payment"
   ).textContent = `${tanggal.getHours()}:${tanggal.getMinutes()} WIB`;
   document.getElementById("jumlah").textContent = `Rp. ${
      price * localStorage.getItem("chair_total")
   }`;
   document.getElementById("total").textContent = `Rp. ${
      price * localStorage.getItem("chair_total")
   }`;
}

function confirmData(chairChoosen) {
   document.getElementById("section-data").style.display = "block";

   document
      .getElementById("confirm-data")
      .addEventListener("submit", function (event) {
         event.preventDefault();
         const name = document.getElementById("name").value;
         const age = document.getElementById("age").value;

         if (age < age_rating) {
            alert("Umur anda dibawah rating");
         } else {
            confirmPayment(chairChoosen);
         }
      });
}
document
   .getElementById("choose-chair")
   .addEventListener("submit", function (event) {
      event.preventDefault();

      let checkboxes = document.querySelectorAll('input[name="chair"]:checked');
      let output = [];
      checkboxes.forEach((checkbox) => {
         output.push(checkbox.value);
      });
      console.log(output);

      if (output.length !== 0) {
         confirmData(output);
      }
   });
