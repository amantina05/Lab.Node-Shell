//code pwd
// process.stdout.write('prompt > ');

// const pwdPrompt = process.stdin.on('data', data => {
//   const cmd = data.toString().trim();
//   if (cmd === 'pwd') {
//     process.stdout.write(`Current directory: ${process.cwd()}`);
//   }
//   process.stdout.write('\nprompt > ');
// });

// module.export = {pwdPrompt}

module.exports = function () {
  process.stdout.write('prompt > ')

  process.stdin.on('data', data => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
      process.stdout.write(`Current directory: ${process.cwd()}`);
    }
    process.stdout.write('\nprompt > ');
  });
}
