# POD ASSESSMENT: WEEK 1

## GROUP NAME: THE LAKE HOUSE

---

## Eduardo's Exercises

### 1. Exercise Name:  Make Super Pet

Description: Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object. (Using map, filter or reduce).

### 2. Exercise Name:  Oject Properties

Description: Create a function that when given an array of strings, returns an array of objects with properties
             for the given string value and the length of the string and the string without vowels (not including y). (Using map, filter or reduce).

---

## Jacob's Exercises

### 1. Exercise Name

Description:

### 2. Exercise Name

Description:

---

## Miguel's Exercises

### 1. Calculate the Total Price of Groceries

#### Description: 
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
A grocery object has a product, a quantity and a price, for example:

````
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
````

#### Examples

````
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3
````

### 2. Hitting the Jackpot

#### Description:

Create a function that takes in an array (slot machine outcome) and returns `true` if all elements in the array are identical, and `false` otherwise.
 The array will contain 4 elements.
 
 #### Examples
 
 ````
testJackpot(["@", "@", "@", "@"]) ➞ true
testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
````

##### Note

- The elements must be exactly identical for there to be a jackpot.

