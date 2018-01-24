const fs = require('fs');

const makeDir = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};

export default { makeDir };
