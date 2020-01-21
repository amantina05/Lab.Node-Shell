module.exports = function() {
  const fs = require('fs');
  fs.readFile('./bash.js', (err, data) => {
    if (err) {
      throw err;
    }
    // console.log(data);
    process.stdout.write(data);
  });
};
