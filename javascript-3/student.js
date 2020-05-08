//////////////////SETUP////////////////////
// Close all other index.html files and open the index.html file in javascript-3/DO_NOT_EDIT/index.html. You should see an input field and a button that says "Add Item". 

//////////////////STEP 1////////////////////
//Create an array called 'groceries' that contains three grocery items as strings. 

const groceries = ['Steak','Mushrooms', 'onions']

//////////////////STEP 2////////////////////
//Create a variable called 'yourName' that is assigned the value of your name as a string. 

const yourName = 'Hansen'

//////////////////STEP 3////////////////////
//Create a function called 'setGroceryListTitle' that takes in one parameter called 'x'. The function should return a string of 'XPARAM's Grocery List'.

function setGroceryListTitle(x){
    return `${x}'s Grocery List`
}

//////////////////STEP 4////////////////////
//Create a function called 'addItem' that takes in one parameter called 'item'. Add the item parameter to the end of the groceries array created above. Inside of addItem, invoke displayData() which is a function you did not create (we did) that takes care of some of the work for getting your page to display correctly.

function addItem(item){
    groceries.push(item)
    displayData()
}

//////////////////STEP 5////////////////////
//Create a function called 'removeItem' that takes in one parameter called 'index'. Inside of the removeItem function, remove the item that corresponds to the index parameter from the groceries array above by using splice. Then, invoke the displayData() function inside of your removeItem function.

function removeItem(index){
    groceries.splice(index, 1)
    displayData()
}

//////////////////STEP 6////////////////////
//Create a function called 'checkGroceryCount'. Inside of checkGroceryCount, you're going to check the total number of groceries in your groceries array using .length. Using an if/else statement, check if the number of groceries is greater than or equal to 5. If it is, return the string 'That looks like a big trip' from the function. If the number of groceries is equal to one, return the string '1 item'. If the amount of groceries is between 1 and 5, return the string 'NUMBEROFGROCERIES items' with NUMBEROFGROCERIES replaced by the number of items in your groceries array.

function checkGroceryCount(){
    if(groceries.length >= 5){
        return 'That looks like a big trip'
    } else if(groceries.length > 1 && groceries.length < 5){
        return `${groceries.length} items`
    }
    return` 1 item`
}

//////////////////STEP 6////////////////////
// Refresh the index.html page. You should now see the same thing you saw when you first loaded the page but you should now be able to add items to your grocery list with a dynamic total showing. If you double click on an item, it should remove that item
