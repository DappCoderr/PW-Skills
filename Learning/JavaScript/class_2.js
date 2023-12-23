// Conversions ------------------------------------------------------------------------

// let bankBalance = ""
// // let bankBalanceInInt = String(bankBalance)
// let bankBalanceInInts = parseFloat(bankBalance)
// let bankBalanceInInt = Boolean(bankBalance)

// console.log(bankBalanceInInt)

// In Bool -> 
// empty value:- False
// And value :- True

// console.log(typeof bankBalance)
// console.log(typeof bankBalanceInInt)
// console.log(typeof bankBalanceInInts)

// concatenation------------------------------------------------------------------------

// let firstName = "Hardik"
// let lastName = "Sharma"

// Method 1
// console.log(firstOfUser + lastOfUser);

// Method 2
// console.log(`Hey our user frist name is ${firstName} and last name is ${lastName} which is really cool!!`)

// Num And String------------------------------------------------------------------------


// let userName = "0xE539B4DA7593FEC2CD4AD30A497F93F247BEA7BC"
// console.log(userName.length)
// console.log(`Wallet Address ${userName.substring(0,4)}...${userName.substring(38,42)}`)

// console.log(userName.toLowerCase());
// console.log(userName.includes("75931"));
// // console.log(userName.replace("7593", "hardik"))

// let changeName = userName.replace("7593", "hardik")

// if(changeName.includes("hardik")){
//     console.log(changeName.replace("hardik", "kartikay"))
// } else{
//     console.log("don't have hardik")
// }


// Math------------------------------------------------------------------------
// const randomNumber = Math.random()
// const diceResult = Math.floor(randomNumber*6)+1
// console.log(diceResult)

// Array------------------------------------------------------------------------

const indian_cricketers_batter = ["MSDhoni", "Kohli", "Hardik", "Rohit", "Sachin"]
const indian_cricketers_bowler = ["Bumra", "chahal", "Khan"]
// console.log(indian_cricketers_batter.length)
// console.log(indian_cricketers_batter.concat(indian_cricketers_bowler))
// console.log(indian_cricketers_batter.at(1))
// console.log(indian_cricketers_batter[1])
// // filter will return array
// console.log(indian_cricketers_batter.filter((word) => word.length > 6 ))
// console.log(indian_cricketers_batter.find((word) => word.length > 6 ))
// console.log(indian_cricketers_batter.findIndex((word) => word.length > 10 ))
// indian_cricketers_batter.push("Dravid")
// console.log(indian_cricketers_batter)
// indian_cricketers_batter.pop()
// console.log(indian_cricketers_batter)
// indian_cricketers_batter.shift()
// console.log(indian_cricketers_batter)
// indian_cricketers_batter.unshift("MSDhoni")
// console.log(indian_cricketers_batter)
// console.log(indian_cricketers_batter.join(' '))

/*
Slice and Splice


Slice creates a copy of new Array -> last element is not included. -> Provide selective as answer
Splice manipulate the original Array -> last element is included -> Remove the selective item and and return the array.
*/


// Object------------------------------------------------------------------------

const user = {
    name : "Hardik",
    "Last Name": "Sharma"
}

// console.log(user["Last Name"])
// console.log(Object.keys(user))
console.log(Object.values(user))