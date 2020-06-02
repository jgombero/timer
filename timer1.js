const userInput = process.argv.slice(2);

for (let i = 0; i < userInput.length; i++) {

  if (typeof(userInput[i]) === 'number' && userInput[i] > 0)
  setTimeout(() => {
    process.stdout.write('\x07');
  }, userInput[i] * 1000);
}