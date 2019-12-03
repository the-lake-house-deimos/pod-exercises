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