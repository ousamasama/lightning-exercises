let me = {
    name: "Ousama",
    hair_color: "Dark Brown",
    mbi: "INTP-T"
};

let her = {
    name: "Olive",
    hair_color: "Red",
    mbi: "Dog",
    sayMyName: () => "Bark"
};

console.log(me);
console.log(her);

const age = 30;
const timeSpan = 25;
const futureAge = age + timeSpan;
const name = "Biff";
const generationStereotype = "millenial";
const dadJoke = "milleni-old";

let string = console.log(`Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke}. Ha ha!`)

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }
//1
  console.log(`Our company's lawyer is ${employee.name}`);
//2
  console.log(`Jeff was hired on ${employee.hire_date}`);
//3
  employee.vacation_days = 20;
  console.log(employee);
//4
  let eom = "employee_of_the_month";
  employee.eom = false
  console.log(employee)

  let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    sayMyName: () => "Hey, Billy.",
    addToUtilityBelt: (expensiveTool) => {
        painter.tools.push(expensiveTool);
    }
  }
//1 Add an action that the painter can perform.
//2 Have her take that action by execucting the method you created.
console.log(painter.sayMyName());
//Bonus Add a method that allows us to add new tools for the painter.
console.log(painter.addToUtilityBelt("ice cream"))
console.log(painter.addToUtilityBelt("trampoline"))
console.log(painter.tools)

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
//1 Use dot notation to access the value of the key "meaning_of_life" in this object
console.log(hitchhikers_guide.random_facts.ultimate_answer)
//2 Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`
let meaning = "meaning_of_life"
console.log(hitchhikers_guide.random_facts.ultimate_answer[meaning])

//loops

let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]
// let reverse = hyperbole.reverse().join(' ')
// console.log(reverse)
let sentence = " ";
hyperbole.reverse().forEach(function(item) {
    sentence += ` ${item}`
})

console.log(sentence)
