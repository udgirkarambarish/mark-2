const chalk = require('chalk');
// const chalkAnimation = require('chalk-animation')
var readlineSync = require('readline-sync');




var lvl1Score = 0;
var lvl2Score = 0;





lvl1 = [
  {
    q: "Ron, Fred, George and Percy stayed with Harry for his first Christmas at Hogwarts because their parents were visiting Bill in Egypt",
    a: "FALSE"
  },
  {
    q: "Harry’s first year Christmas cracker gifts included a grow-your-own-warts kit",
    a: "TRUE"
  },
  {
    q: "The Great Hall was always decorated with 10 Christmas trees",
    a: "FALSE"
  },
  {
    q: "In the books, Harry’s Firebolt was given to him as a present on his third Christmas at Hogwarts",
    a: "TRUE"
  },
  {
    q: "The Yule Ball took place at 8pm on Christmas Day",
    a: "TRUE"
  },
  {
    q: "When suits of armour were bewitched to sing Christmas songs ahead of the Yule Ball, the carol mentioned was ‘God Rest Ye Merry Gentlemen’",
    a: "FALSE"
  },
  {
    q: "In Order of the Phoenix, Hermione knitted Kreacher a woollen scarf for Christmas",
    a: "FALSE"
  },
  {
    q: "Luna Lovegood believed that mistletoe was infested with Nargles",
    a: "TRUE"
  },
  {
    q: "When Harry spent Christmas at The Burrow in Half-Blood Prince, the angel on top of the tree was actually a stupefied garden gnome",
    a: "TRUE"
  },
  {
    q: "In Deathly Hallows, it was Christmas Day when Harry and Hermione visited Harry’s parents’ graves",
    a: "FALSE"
  }
];








lvl2 = [
  {
    q: "When Harry was unexpectedly made the Gryffindor Quidditch team’s Seeker, he was the youngest player in how long?",
    a: "CENTURY"
  },
  {
    q: "How many points did Dumbledore award Neville at the end of Philosopher’s Stone, meaning Gryffindor won the House Cup?",
    a: "TEN"
  },
  {
    q: "What colour was Ron’s bedroom at The Burrow?",
    a: "ORANGE"
  },
  {
    q: "What item of clothing did Harry ensure Lucius Malfoy gave Dobby in order to free him?",
    a: "SOCK"
  },
  {
    q: "What did Romilda Vane think Harry had tattooed on his chest?",
    a: "HIPPODRIFF"
  }
]





function quiz1(q, a, i) {
  if (a.toUpperCase() === q[i].a.toUpperCase()) {
    console.log(chalk.greenBright.bold("Correct! :)"));
    lvl1Score++;
  } else {
    console.log(chalk.red.bold("Wrong! :("));
  }
  console.log("Your current score is : " + lvl1Score);
  console.log("-----------------------------");
}



function quiz2(q, a, i) {
  if (a.toUpperCase() === q[i].a.toUpperCase()) {
    console.log(chalk.greenBright.bold("Correct! :)"));
    lvl2Score++;
  } else {
    console.log(chalk.red.bold("Wrong! :("));
  }
  console.log("Your current score is : " + (lvl1Score + lvl2Score));
  console.log("-----------------------------");
}






console.log(chalk.italic.magentaBright.bold("Welcome Potterheads!"));
console.log("-----------------------------");
userName = readlineSync.question("Name : ");
console.log("Hey " + chalk.blue.bold(userName) + "!");
console.log("-----------------------------");
console.log("Answer should be in 'true' or 'false' format");
console.log("-----------------------------");
console.log(chalk.underline("Level-1 :"));
console.log("-----------------------------");




for (let i = 0; i < 10; i++) {
  let userAns = readlineSync.question(lvl1[i].q + "\nAnswer : ");
  quiz1(lvl1, userAns, i);
}




if (lvl1Score >= 5) {
  console.log("Yay!");
  console.log("You are eligible for level-2 of the quiz");
  console.log("-----------------------------");
  console.log(chalk.underline("Level-2 :"));
  console.log("Answer in one word");
  console.log("-----------------------------");
  for (let i = 0; i < 5; i++) {
    let userAns = readlineSync.question(lvl2[i].q + "\nAnswer : ");
    quiz2(lvl2, userAns, i);
  }
  if ((lvl1Score + lvl2Score) > 13) {
    console.log(chalk.italic.red.bold("Yer a quizzard !"));
  }
} else {
  console.log("Sorry, you need to be more Potterhead :(");
}




console.log("-----------------------------");
console.log("Ranking : ");
let rank = [3];
rank[0] = "Ambarish";
for (let i = 0; i < 3; i++) {
  console.log(chalk.italic.bgBlueBright("Rank " + (i + 1) + ": " + rank[i]));
}
console.log("-----------------------------");
console.log(chalk.underline("If your score is more than 13, send me screenshot I will update the ranking :)"));
console.log("-----------------------------");

