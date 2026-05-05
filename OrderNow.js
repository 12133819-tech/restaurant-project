class Item {
  constructor(id, price, name) {
    this.id = id;
    this.price = price;
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }
  

  getName() {
    return this.name;
  }
}

// Create the item list
const items = [
  new Item(1, 5, "Classic Burger"),
  new Item(2, 7, "Crispy"),
  new Item(3, 10, "Pizza"),
  new Item(4, 8, "Chicken Burger"),
  new Item(5, 5, "Fajita"),
  new Item(6, 10, "Salad"),
  new Item(7, 5, "Cheese Burger"),
  new Item(8, 4, "Orange Juice"),
  new Item(9, 5, "Strawberry Juice"),
  new Item(10, 5, "Watermelon Juice"),
  new Item(11, 4, "Mango Juice"),
  new Item(12, 7, "Avoca Shake"),
  new Item(13, 6, "Oreo Shake"),
  new Item(14, 8, "Lotus Shake"),
  new Item(15, 3, "Chocolate Cake"),
  new Item(16, 5, "Classic Crepe"),
  new Item(17, 6, "Lotus Crepe"),
  new Item(18, 7, "Special Crepe"),
  new Item(19, 4, "Cheese Cake"),
  new Item(20, 5, "Oreo Cake"),
  new Item(21, 4, "Ice Cream"),
];

const itemIdInput = document.querySelector("#itemId");
const quantityInput = document.querySelector("#quantity");
const errorLabel = document.querySelector(".error");
const tableBody = document.querySelector("#table-body");
const tableFooter = document.querySelector("#table-footer");
const error2 = document.querySelector(".error2");

function findItemByID(id){
  for(let i=0; i<items.length; i++){
    if(items[i].getId() == id)
      return items[i];
  }
}


function add(){
  let isValid = true;
  const item = findItemByID(itemIdInput.value);
  if(!item){
    errorLabel.innerHTML = "item not found";
    isValid = false;
  }
  if(itemIdInput.value == "" && itemIdInput.value.length == 0 && quantityInput.value == 0){
    error2.innerHTML = "fill all the inputs";
    isValid = false;
  
  }

  

  if(isValid){
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    if(quantityInput.value > 0){
    td1.innerHTML = item.getName();
    td2.innerHTML = item.getPrice() *quantityInput.value + "$";
    tr.append(td1);
    tr.append(td2);
    tableBody.appendChild(tr);
      errorLabel.innerHTML ="";
  error2.innerHTML = "";
    }

  }

  itemIdInput.value = "";
  quantityInput.value = "";

}


function searchItem(item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].getId() === item.getid) {
      return true;
    }
  }
  return false;
}

