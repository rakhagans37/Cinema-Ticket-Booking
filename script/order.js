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
