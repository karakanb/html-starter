import File from './file-operations';

export default class {
  constructor(directory) {
    this.directory = directory;
  }

  build() {
    File.makeDir(this.directory);
    File.copy(`${__dirname}/templates`, this.directory);
    console.log('Success');
  }
}
