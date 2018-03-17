import { ncp } from 'ncp';
import fs from 'fs';

export default class {
  static makeDir(directory) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  }

  static copy(source, destination) {
    ncp.limit = 16;
    ncp(source, destination, (err) => {
      if (err) {
        return console.error(err);
      }
      return true;
    });

    return true;
  }
}
