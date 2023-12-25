// Class 4

// truthy values
// true
// 1
// -1


// falsy vlaues
// BigInt and -0
// false
// 0
// ""
// null
// undefined
// NaN

// const email = "amit@gmail.com"

// if(email){
//     console.log("Give me your password")
// }else{
//     console.log("Give me you Email")
// }


//  if user provide email, password, then allow login, else ask for it.


// const email = "ffsfsf"
// const password = "sfsfsfsf"

// if(email && password){
//     console.log("Please login user")
// } else{
//     console.log("Enter email and password")
// }


// Allow user to login with google and github


// const googleLoginToken = "jlfjslfj"
// const githubLoginToken = ""

// if (googleLoginToken || githubLoginToken) {
//     console.log("Welcome to app")
// } else{
//     console.log("Please login to view your account")
// }


// const GithubToken = 12233
// const GoogleToken = 4424242

// const user = 4424242

// switch (user) {
//     case 4424242:
//         console.log("You login with Google")
//         break;
//     case 12233:
//         console.log("You login with Github")
//         break;
//     default:
//         break;
// }

// const loading = false
// loading ? "Loading..." : "Show cards"

let userScore = 10;
let minValue = 0;

for (userScore; userScore>=minValue; userScore--) {
    if(userScore == 5){
        continue
    }
    console.log(`The current value of userScore is ${userScore}`);
}