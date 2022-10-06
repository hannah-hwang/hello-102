
function yourName() {
    let usersName = prompt("What is your name?");
    document.write("Hello, " + usersName + "! Hope you like bread!");
}

function guessBread() {
    let userAns = prompt("Guess what bread I'm thinking of?");
    while (userAns.toLowerCase() !== 'sourdough') {
        userAns = prompt("Nope!");
    }
    { alert("Yep!"); }
}

// function pageHelpful() {
//     let response = prompt("Was this page helpful?");
//     console.log("User said:" + response);
//     if (response == "Yes") {
//         document.write("Glad we could help!")
//     }
//     else if (response == "No") {
//         document.write("Ok! Thanks for visiting!")
//     }
//     else if (response == "no") {
//         document.write("Ok! Thanks for visiting!")
//     }
//     else if (response == "yes") {
//         document.write("Glad we could help!")
//     }
//     else {
//         document.write("Hmmm.. Didn't get that")
//     }
// }

function breadRating() {
    let rating = prompt("On a scale of 1-5, how many stars would you give this page?");
    for (let i = 0; i < rating; i++) {
        document.write('<img class= "star-cookie" src="starcookie.jpeg" alt="star-shaped cookie" width="50" height="50" />');
    }
}
