const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


//Expected OUPUT-1 --> Unique Product Count

/* ouput1 = {
  "TV": 2,
  "AC": 2,
  "FAN": 1
}; */

//Expected OUTPUT -2 --> Quantity sum for Each Unique Product Name

/* ouput2 =  [{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
] */

// to find Unique Product Count

let productsCount={};
listOfProducts.forEach(p=>{
if(productsCount[p.productName]){
productsCount[p.productName]+=1;
}else{
productsCount[p.productName]=1;
}
})

console.log(productsCount);



//for Quantity sum for Each Unique Product Name

let productsQuantity=[];
listOfProducts.forEach(lp=>{
const presentItemList=productsQuantity.filter(p=>p.productName===lp.productName);
if(presentItemList.length!=0){
presentItemList[0].quantity+=lp.quantity;
}else{
productsQuantity=[...productsQuantity,lp];
}
})

console.log(productsQuantity);