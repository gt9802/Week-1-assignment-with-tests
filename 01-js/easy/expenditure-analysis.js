/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

//10-12-2021 9:47:56


function calculateTotalSpentByCategory(transactions) {
  var result = []
  var categoryTotalSpent = {}
  
  for(i in transactions){
    var category = transactions[i].category
    var price = transactions[i].price
    if(categoryTotalSpent.hasOwnProperty(category)){
      categoryTotalSpent[category] += price
    }else{
      categoryTotalSpent[category] = price
    }
  }
  
  for(category in categoryTotalSpent){
    var totalSpent = categoryTotalSpent[category]
    result.push({"category": category, "totalSpent": totalSpent})
  }
  return result

}

var transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: 'Food',
    itemName: 'Sushi',
  },
]
var ans = calculateTotalSpentByCategory(transactions)
console.log(ans)

module.exports = calculateTotalSpentByCategory;
