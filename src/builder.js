import File from './file-operations';

export default class {
  constructor(directory) {
    this.directory = directory;
  }

  build() {
    File.makeDir(this.directory);
  }
}
