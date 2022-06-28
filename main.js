var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var newArr = [];
var alphabetArr = [];
function forception(people, alphabet){
    alphabetArr = Array.from(alphabet);

    people.forEach(element => {
        console.log(element)
        newArr.push(element);
        alphabetArr.forEach(letter=>{
            newArr.push(letter);
        });
    });
    console.log(newArr);
};

forception(people, alphabet);