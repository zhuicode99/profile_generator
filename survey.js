const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable: ', (answer1) => {
  console.log(`Nice to meet you ${answer1}`);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`Nice! I like ${answer2} as well!`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`${answer3} is my favorite song as well!`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`Obsolutely, ${answer4} is the most important meal in a day`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`I would like ${answer5} while eat my food!`);
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            console.log(`I like ${answer6} too, but I'm a bad player.`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`I can tell you are good at ${answer7}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});