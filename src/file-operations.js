import { ncp } from 'ncp';
import fs from 'fs';
import output from './outputter';

export default class {
  /**
   * Create a directory if not exists.
   * @param {string} directory
   */
  static makeDir(directory) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  }

  /**
   * Copy the given source recursively to the destination.
   * @param {string} source
   * @param {string} destination
   */
  static copy(source, destination) {
    ncp.limit = 16;
    ncp(source, destination, (err) => {
      if (err) {
        return output.error(err);
      }
      return true;
    });

    return true;
  }
}
