export const ajax = new XMLHttpRequest();

ajax.open("GET", "https://seleksi-sea-2023.vercel.app/api/movies");
ajax.send();

export const filmSchedule = new XMLHttpRequest();

filmSchedule.open("GET", "../jadwal.json");
filmSchedule.send();

export class nonLogUser {
   loginStatus = false;
   constructor() {
      this.balance = 0;
      this.orderHistory = [];
      this.paymentMethod = [];
   }
}
export class logUser {
   static id = 0;
   loginStatus = true;
   constructor() {
      this.id += 1;
      this.orderHistory = [];
      this.paymentMethod = [];
   }
}

class paymentMethod {
   constructor(paymentNumber) {
      this.paymentNumber = paymentNumber;
   }
}
export class gopay extends paymentMethod {
   constructor(paymentNumber) {
      super(paymentNumber);
      this.method = "Gopay";
      this.logo = "../img/Visa.png";
   }
}
export class ovo extends paymentMethod {
   constructor(paymentNumber) {
      super(paymentNumber);
      this.method = "Ovo";
      this.logo = "../img/Mastercard.png";
   }
}

export class dana extends paymentMethod {
   constructor(paymentNumber) {
      super(paymentNumber);
      this.method = "Dana";
      this.logo = "../img/Mastercard.png";
   }
}

if (localStorage.length !== 0) {
   localStorage.setItem("account", JSON.stringify(new nonLogUser()));
}

const movieBook = {
   0: {},
   1: {},
   2: {},
   3: {},
   4: {},
   5: {},
   6: {},
   7: {},
   8: {},
   9: {},
   10: {},
   11: {},
   12: {},
   13: {},
   14: {},
   15: {},
   16: {},
   17: {},
   18: {},
   19: {},
   20: {},
   21: {},
   22: {},
   23: {},
   24: {},
   25: {},
   26: {},
   27: {},
   28: {},
   29: {},
   30: {},
};
if ("BOOK" in localStorage !== false) {
   localStorage.setItem("BOOK", JSON.stringify(movieBook));
}
