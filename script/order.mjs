import { ajax, filmSchedule } from "./module.mjs";

const movieID = localStorage.getItem("movieID");
ajax.onload = function () {
   const json = JSON.parse(ajax.responseText);

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
   });
