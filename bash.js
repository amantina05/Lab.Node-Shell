// process.stdout.write('prompt > ');

// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

//code pwd
process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    process.stdout.write(`Current directory: ${process.cwd()}`);
  }
  process.stdout.write('\nprompt > ');
});
