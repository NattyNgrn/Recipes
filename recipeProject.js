
// "Pizza is done!" if time is 0
// "Keep waiting" if time is over 0
// "You forgot to set the timer" if time doesn't exist
function pizzaStatus(time) {
    // checking if time is 0
    if (time === 0) {
        return "Pizza is done!";
    }
    // checking if time is over 0
    else if (time > 0) {
        return ("Keep waiting you have " + time + " minutes left.");
    }
    // if none of the above
    else {
        return "You forgot to set the timer.";
    }
}

console.log(pizzaStatus(0)); // should print "Pizza is done!"
console.log(pizzaStatus(12)); // should print "Keep waiting you have 12 minutes left."
console.log(pizzaStatus());  // should print "You forgot to set the timer."


// if time exists prep time should be number of toppings times time
// if it doesn't prep time should be number of toppings times two
function prepTime(toppings, time) {
    // checks if time exists
    if (time) {
        // multiplies how many toppings and time
        let totalTime = toppings.length * time;
        return totalTime;
    }
    else {
        // multiplies how many toppings and 2
        return toppings.length * 2;
    }
}

const toppings = ['eggplant', 'onions', 'peppers', 'meatballs', 'broccoli', 'mushrooms'];
console.log(prepTime(toppings, 3)); // should print 18
console.log(prepTime(toppings)); // should print 12


// count up how much cheese and how much sauce you need
// for every topping that starts with m add 2 to cheese ounces and 3 to sauce ounces
// for every other topping add 1 to cheese and 1 to sauce
function sauceCheese(toppings) {
    let cheeseOunces = 0;
    let sauceOunces = 0;
    // goes through all the indexes of toppings
    for (let i = 0; i < toppings.length; i++) {
        // checks if the first letter is m
        if (toppings[i][0] === "m") {
            cheeseOunces += 2;
            sauceOunces += 3; 
        }
        // do this otherwise
        else {
            cheeseOunces += 1;
            sauceOunces += 1;
        }
    }
    // creating object to return
    let result = {
        "cheese": cheeseOunces,
        "sauce": sauceOunces
    };
    return result;
}

console.log(sauceCheese(toppings)); // should print object of {cheese: 8, sauce: 10}


// adds the last ingredient of the friend's list to the end of my list
// does not change friend's list
function addSecretIngredient(friendsList, myList) {
    let secret = friendsList[friendsList.length - 1]; // stores the last ingredient in a variable
    myList.push(secret); // adds the last ingredient to the end of the list
};

const friendsList = ['onions', 'olives', 'mozzarella', 'anchovies'];
const myList = ['meatballs', 'onions', 'chicken', 'mozzarella'];
console.log(myList); // should print original list
addSecretIngredient(friendsList, myList); // modifies the original list
console.log(myList); // should print modified list

// creates new recipe with new measurements for the number of portions specified
// does not modify the original recipe
function scalePizzaRecipe(recipe, portions) {
    let newRecipe = {} // creates a new object that I will add to
    let servings = portions / 2; // because the recipe is already for two portions
    let ingredients = Object.keys(recipe); // stores all the keys from the object in a list
    // loops through all the indexes in the ingredients list
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i]; // gets the ingredient at the index
        // adds the ingredient and new measurement to the new object
        newRecipe[ingredient] = recipe[ingredient] * servings; 
    }
    return newRecipe;
};

const recipe = {
    pepperoni: 16,
    sauce: 0.4,
    mozzarella: 1,
    meatballs: 100,
};
console.log(recipe); // { pepperoni: 16, sauce: 0.4, mozzarella: 1, meatballs: 100 }
console.log(scalePizzaRecipe(recipe, 8)); // { pepperoni: 64, sauce: 1.6, mozzarella: 4, meatballs: 400 }
console.log(recipe); // { pepperoni: 16, sauce: 0.4, mozzarella: 1, meatballs: 100 }