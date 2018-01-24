import Helper from './helpers';

export default class {
  constructor(directory) {
    this.directory = directory;
  }

  build() {
    Helper.makeDir(this.directory);
  }
}
