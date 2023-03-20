//WRITE YOUR CODE BELOW
const customerDrink = {
  orders: [
    {
      drinkName: "Cappuccino",
      sugarAmt: 2,
      isReady: true,
    },
    {
      drinkName: "Latte",
      sugarAmt: 0,
      isReady: false,
    },
    {
      drinkName: "Macchiatto",
      sugarAmt: 5,
      isReady: true,
    },
    {
      drinkName: "Iced Tea",
      sugarAmt: 1,
      isReady: false,
    },
  ],
};

for (let i = 0; i < customerDrink.orders.length; i++) {
  customerDrink.orders[i].isReady ? console.log("ready for pickup") : console.log("Still in order Queue")
}

for (key in customerDrink.orders[1]) {
    console.log(key)
}
