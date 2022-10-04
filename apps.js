
function yourName(){
let usersName = prompt("What is your name?");
document.write("Hello, " + usersName + "! Hope you like bread!");
}

function guessBread(){
let usersAns = prompt("Guess what bread I'm thinking of?");
if (usersAns === "sourdough bread") {
    document.write("Correct!")
}
else {
    document.write("Nope!")
}
}

function pageHelpful(){
let response = prompt("Was this page helpful?");
console.log("User said:" + response);
if (response == "Yes") {
    document.write("Glad we could help!")
}
else if (response == "No") {
    document.write("Ok! Thanks for visiting!")
}
else if (response == "no") {
    document.write("Ok! Thanks for visiting!")
}
else if (response == "yes") {
    document.write("Glad we could help!")
}
else {
    document.write("Hmmm.. Didn't get that")
}
}