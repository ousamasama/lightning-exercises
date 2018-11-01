class Person {
    //Write a Person class with a constructor that takes a first and last name.
    constructor(props) {
        //or constructor(first, last) then set = to first, last then when creating new person pass in ("first", "last")
        this.first_name = props.first_name
        this.last_name = props.last_name
    }

    get fullname() {
        //Write a getter that returns the full name
        return `${this.first_name} ${this.last_name}`
    }

    set nickname (value)   {
        // if (typeof(value) === `string` && !value.includes("fu"))
        //Write a setter that sets a nickname.
        // const parts = value.split(' ')
        // this.first_name = parts[0]
        // this.last_name = parts[1]
        // _ before prop makes property not be same name
        this._nickname = value
    }

}

const billie = new Person({
    first_name: "Billie",
    last_name: "Johnson"
})

console.log(billie.fullname)
console.log("Billie wants to change her nickname to Kiwi Stubbs")
billie.nickname = "Kiwi Stubbs"
console.log(`Hey, I used to be known as ${billie.fullname}, but now I go by ${billie._nickname}`)
console.log(billie)

class Childcare {
    constructor(props) {
        this.child = props.child
        this.caregiver = props.caregiver
    }

    get diaper_change () {
        if(this._behavior === "Good") {
            return `
            ${this.child}'s diaper has been changed by ${this.caregiver}. ${this.child} is being ${this._behavior}. 
            “Supreme excellence consists of breaking the enemy's resistance without fighting.”
            `
        } else if(this._behavior === "Bad") {
            return `
            ${this.child}'s diaper has been changed by ${this.caregiver}. ${this.child} is being ${this._behavior}. 
            “The wise warrior avoids the battle.”
            `
        }
    }

    set behavior (value) {
        this._behavior = value
    }
}

const malikElayan = new Childcare({
    child: "Malik",
    caregiver: "Holly"
})

malikElayan.behavior = "Good"
console.log(malikElayan.diaper_change)
console.log(malikElayan)
malikElayan.behavior = "Bad"
console.log(malikElayan.diaper_change)
console.log(malikElayan)