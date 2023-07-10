export const ajax = new XMLHttpRequest();

ajax.open("GET", "https://seleksi-sea-2023.vercel.app/api/movies");
ajax.send();

export class nonLogUser {
   loginStatus = false;
   constructor() {
      this.balance = 0;
      this.orderHistory = [];
      this.paymentMethod = [];
   }
}

class paymentMethod {
   constructor(paymentNumber, paymentDate) {
      this.paymentNumber = paymentNumber;
      this.paymentDate = paymentDate;
   }
}
export class visa extends paymentMethod {
   constructor(paymentNumber, paymentDate) {
      super(paymentNumber, paymentDate);
      this.method = "Visa";
      this.logo = "../img/Visa.png";
   }
}
export class masterCard extends paymentMethod {
   constructor(paymentNumber, paymentDate) {
      super(paymentNumber, paymentDate);
      this.method = "Mastercard";
      this.logo = "../img/Mastercard.png";
   }
}

localStorage.setItem("account", JSON.stringify(new nonLogUser()));
