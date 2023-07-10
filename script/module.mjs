export const ajax = new XMLHttpRequest();

ajax.open("GET", "https://seleksi-sea-2023.vercel.app/api/movies");
ajax.send();

class nonLogUser {
   constructor() {
      this.balance = 0;
      this.orderHistory = [];
   }
}

localStorage.setItem("account", JSON.stringify(new nonLogUser()));
