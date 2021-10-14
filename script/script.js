let food =[
  {
    name: "Jollof Rice",
    picture:'jollof',
    price: 1000
  },
  {
    name: "Pounded Yam & Egusi",
    picture:'poundo',
    price: 500
  },
  {
    name: "Noodles With Egg",
    picture:'noodles',
    price: 600
  },

  {
    name: "Jollof Spaghetti",
    picture:'spag',
    price: 700
  },
  {
    name: "Fried Plantain and Egg",
    picture:'plegg',
    price: 900
  },
  {
    name: "Fried Rice",
    picture:'fried',
    price: 1200
  },

  {
    name: "Amala and Ewedu Soup",
    picture:'amala',
    price: 600
  },
  {
    name: "Meat Pepper Soup",
    picture:'peppersoup',
    price: 2000
  },
  {
    name: "Porridge Beans",
    picture:'beans',
    price: 400
  },

  {
    name: "Nigerian Party Salad",
    picture:'salad',
    price: 2500
  },
  {
    name: "White Rice With Stew",
    picture:'whiterice',
    price: 1000
  },
  {
    name: "Semo With Efo Riro",
    picture:'semo',
    price: 800
  }
]

let FoodSection = document.getElementById('food-cover');
let html="";

food.forEach(e =>{
  html +=
   `<div class="card food-card shadow m-4 border-0">
    <img src="./images/${e.picture}.jpg" alt="IMG03" class="card-img-top img-thumbnail" />
    <div class="card-body">
      <h1 class="card-title">${e.name}</h1>
      <h3>&#8358;${e.price}</h3>
    </div>
  </div> `
  console.log(e)

  FoodSection.innerHTML = html
})
