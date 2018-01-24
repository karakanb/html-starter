const fs = require('fs');

export default class {
  static makeDir(directory) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  }
}
