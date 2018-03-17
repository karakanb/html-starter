import File from './file-operations';
import output from './outputter';

export default class {
  constructor(directory) {
    this.directory = directory;
  }

  build() {
    output.info('');
    output.success('****************************************');
    output.info('');


    output.warning('Generating the template...');
    File.makeDir(this.directory);
    File.copy(`${__dirname}/templates`, this.directory);
    output.success(`HTML skeleton has been placed to ${this.directory}.`);

    output.info('');
    output.success('****************************************');
    output.info('');
  }
}
