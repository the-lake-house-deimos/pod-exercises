//Create a function that takes a string (morse code) as an argument and return an unencrypted string.
function decodeMorse(str) {
    //object to translate the morse code
    let morseCode = {
        "-----" : "0",
        ".----" : "1",
        "..---" : "2",
        "...--" : "3",
        "....-" : "4",
        "....." : "5",
        "-...." : "6",
        "--..." : "7",
        "---.." : "8",
        "----." : "9",
        ".-" : "a",
        "-..." : "b",
        "-.-." : "c",
        "-.." : "d",
        "." : "e",
        "..-." : "f",
        "--." : "g",
        "...." : "h",
        ".." : "i",
        ".---" : "j",
        "-.-" : "k",
        ".-.." : "l",
        "--" : "m",
        "-." : "n",
        "---" : "o",
        ".--." : "p",
        "--.-" : "q",
        ".-." : "r",
        "..." : "s",
        "-" : "t",
        "..-" : "u",
        "...-" : "v",
        ".--" : "w",
        "-..-" : "x",
        "-.--" : "y",
        "--.." : "z",
        ".-.-.-" : ".",
        "--..--" : ",",
        "..--.." : "?",
        "-.-.--" : "!",
        "-....-" : "-",
        "-..-." : "/",
        ".--.-." : "@",
        "-.--." : "(",
        "-.--.-" : ")",
        " " : " ",
        "---..." : ":",
        ".----." : "'",
    };

    //array with the individual morse letters separated
    let words = str.split(" ");
    let result = "";
    //counter to avoid two consecutive black spaces
    let counter = 1;

    for(let x=0; x<words.length; x++){
        if(morseCode[words[x]]=== undefined){
            if(counter % 2 === 0){
                result += "#";
            }
            counter++;
        }else{
            result +=	morseCode[words[x]];
        }
    }
    return result.toUpperCase();
}

console.log(decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."), "EDABBIT CHALLENGE");
console.log(decodeMorse(".... . .-.. .--.   -- .   -.-.--"), "HELP ME !");
console.log(decodeMorse("-.-. .... .- .-.. .-.. . -. --. ."), "CHALLENGE");
console.log(decodeMorse(".----   .- .--. .--. .-.. .   .- -. -..   .....   -.-. .... . .-. .-. -.-- --..--   --...   ... .- -. -.. .-- .. -.-. .... . ... --..--   ..---   - .- -... .-.. . ... --..--   ----.   .. -. ...- .. - . -..   --. ..- -.-- ...   -.-.--   - .... .- - .----. ...   ... ---   -.-. --- --- .-.. .-.-.- .-.-.- .-.-.-"), "1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THAT'S SO COOL...");
console.log(decodeMorse("-.. .. -..   -.-- --- ..-   --. --- -   -- -.--   -- .- .. .-..   ..--.."), "DID YOU GOT MY MAIL ?");
console.log(decodeMorse("- .-- ---   - .... .. -. --. ...   - ---   -.- -. --- .--   ---...   ..   ..-. --- .-. --. . -   - .... . --   ---... -.-."), "TWO THINGS TO KNOW : I FORGET THEM :C");

// Make a function that encrypts a given input with these steps:
//
//     Input: "apple"
//
// Step 1: Reverse the input: "elppa"
//
// Step 2: Replace all vowels using the following chart:
//
// a => 0
// e => 1
// o => 2
// u => 3
//
// // "1lpp0"
// Step 3: Add "aca" to the end of the word: "1lpp0aca"

function encrypt(word) {
    let bucket = word.split("");
    bucket = bucket.reverse();

    for(let x=0; x < bucket.length; x++){
        switch(bucket[x]){
            case "a":
                bucket[x] = "0";
                break;
            case "e":
                bucket[x] = "1";
                break;
            case "o":
                bucket[x] = "2";
                break;
            case "u":
                bucket[x] = "3";
                break;
        }
    }

    return bucket.join("") + "aca";
}

console.log(encrypt("karaca"), "0c0r0kaca");
console.log(encrypt("burak"), "k0r3baca");
console.log(encrypt("banana"), "0n0n0baca");
console.log(encrypt("alpaca"), "0c0pl0aca");
console.log(encrypt("hello"), "2ll1haca");

//Write a function that returns a character mapping from a word.

function characterMapping(str) {
    let bucket = str.split("");
    let counter = 0;
    let chart = bucket.reduce((total, x) => {
        if(typeof total[x] === 'undefined'){
            total[x] = counter;
            counter++;
        }
        return total;
    }, {});

    for(let x = 0; x < bucket.length; x++){
        bucket[x] = chart[bucket[x]];
    }

    return bucket;
}

console.log(characterMapping("abcd"), [0, 1, 2, 3]);
console.log(characterMapping("abb"), [0, 1, 1]);
console.log(characterMapping("babbcb"), [0, 1, 0, 0, 2, 0]);
console.log(characterMapping("aaabb"), [0, 0, 0, 1, 1]);
console.log(characterMapping("abccbc"), [0, 1, 2, 2, 1, 2]);
console.log(characterMapping("fluffy"), [0, 1, 2, 0, 0, 3]);
console.log(characterMapping("madness"), [0, 1, 2, 3, 4, 5, 5]);
console.log(characterMapping("buttery"), [0, 1, 2, 2, 3, 4, 5]);
console.log(characterMapping("canine"), [0, 1, 2, 3, 2, 4]);
console.log(characterMapping("hohoho"), [0, 1, 0, 1, 0, 1]);
console.log(characterMapping("hmmmmm"), [0, 1, 1, 1, 1, 1]);
console.log(characterMapping(""), []);