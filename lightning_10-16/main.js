//1.Write a function that takes a string of a dog breed as an argument (like ‘border collie’)
function dogBreed(breedName) {
    if(breedName !== undefined) {
        petBrags = `My favorite dog breed is ${breedName}.`
        return 'When it comes to pets, ' + petBrags
    } else {
        return 'I like cats.'
    }
}

console.log(dogBreed("Candy Corn"))
console.log(dogBreed())
//2.Have the function return “my favorite dog breed is” plus the passed in string. If no argument is passed to the function, return “I like cats”.

//3.Execute the function in a way that captures the returned value in a variable.

//4.Console.log the string “When it comes to pets,” plus the returned value of the function.

const getMyFullName = (first, last) => `${first} ${last}`

const sayMyFullName = (firstName, lastName, action) => action(firstName, lastName)

console.log(sayMyFullName("Ousama", "Elayan", getMyFullName))

//1.Create a function that creates an object with three properties: name, age, profession. 
//Have the function take an array as an argument. In the body of the function, loop over the array to set the values of the object’s properties. log the result to the console as a table.
const personalObjectMaker = (array) => {
    let personalObj = {}
    const properties = ["name", "age", "profession"]
    properties.forEach((property, index) => {
        personalObj[property] = array[index]
    });
    return console.table(personalObj)
}
//2.Create a second function that takes three arguments: name, age, profession. Have the function place the three arguments into an array and pass that array to the first function by calling it
const personalInfo = (name, age, profession) => {
    const personalArray = [name, age, profession]
    personalObjectMaker(personalArray)
}

personalInfo("Ousama", 29, "Student")

const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const performAction = (a, b, action) => action(a, b)

const test = performAction(5, 8, add)
const test2 = performAction(5, 8, subtract)

console.log(test)
console.log(test2)

//1. Create a function that logs the result of adding two numbers

const add2 = (a, b) => {
    console.log(a + b)
    return a + b
}

add2(3, 4)

//2. Create a second function called calculate that takes three arguments: two numbers and a function
const calculate = (a, b, action) => { 
    add2(a, b)
}

//3. Execute the second function and make it output 5

calculate(3, 2)