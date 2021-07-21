var main = function(input) {
    var aiPick = function(aiRandomNumber) {
        var aiRandomNumber = Math.floor(Math.random() * 3);
        if (aiRandomNumber == 0) {
            return (aiRandomNumber = "stone ✊");
        }
        if (aiRandomNumber == 1) {
            return (aiRandomNumber = "paper ✋");
        }
        if (aiRandomNumber == 2) {
            return (aiRandomNumber = "scissors ✌️");
        }
    };

    var userInput = function() {
        var userOutput = input.toLowerCase();
        if (userOutput === "stone") {
            return (userOutput = "stone ✊");
        }
        if (userOutput === "paper") {
            return (userOutput = "paper ✋");
        }
        if (userOutput === "scissors") {
            return (userOutput = "scissors ✌️");
        }
        if (userOutput === "reverse stone") {
            return (userOutput = "reverse stone ↔️ ✊");
        }
        if (userOutput === "reverse paper") {
            return (userOutput = "reverse paper ↔️ ✋");
        }
        if (userOutput === "reverse scissors") {
            return (userOutput = "reverse scissors ↔️ ✌️");
        }
        if (
            userOutput != "stone" ||
            userOutput != "paper" ||
            userOutput != "scissors"
        ) {
            return (userOutput = `ERROR 😡!!!This game is called "stone, paper, and scissors"!<br>"${input}" is not included in this game 😡.`);
        }
    };

    var pcPick = aiPick();
    var userPick = userInput();

    var formula = function(userPick, pcPick) {
        if (userPick === pcPick) {
            return "draw 🙄";
        } else if (
            userPick === "stone ✊" ||
            userPick === "reverse scissors ↔️ ✌️"
        ) {
            if (pcPick === "paper ✋") {
                return "🤣🤣🤣 !!!!YOU LOOOOOSEEEE!!!! 🤣🤣🤣<br>PAPER BEATS STOOOONE!!!";
            } else {
                return "Wow! You won! 🎉";
            }
        } else if (userPick === "paper ✋" || userPick === "reverse paper ↔️ ✋") {
            if (pcPick === "scissors ✌️") {
                return "🤣🤣🤣 !!!!YOU LOOOOOSEEEE!!!! 🤣🤣🤣<br>SCISSORS BEATS PAPER!!!";
            } else {
                return "Wow! You won! 🎉";
            }
        } else if (
            userPick === "scissors ✌️" ||
            userPick === "reverse stone ↔️ ✊"
        ) {
            if (pcPick === "stone ✊") {
                return "🤣🤣🤣 !!!!YOU LOOOOOSEEEE!!!! 🤣🤣🤣<br>STONE BEATS SCISSORS!!!";
            } else {
                return "Wow! You won! 🎉";
            }
        }
        return "uhmm. I'm confused 🤔.<br>I dont know how to judge that 😟...";
    };

    var judge = formula(userPick, pcPick);

    var myOutputValue = `<strong>user chose:</strong>${userPick} <br><br><strong>pc chose:</strong>${pcPick} <br><br><strong>results:</strong> ${judge}`;
    return myOutputValue;
};