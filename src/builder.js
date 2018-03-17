import opn from 'opn';
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

    // Copy the template files.
    output.warning('Generating the template...');
    File.makeDir(this.directory);
    File.copy(`${__dirname}/templates`, this.directory);
    output.success(`HTML skeleton has been placed to ${this.directory}.`);

    // Open the copied file in Google Chrome.
    opn(`${this.directory}/index.html`, { wait: false });

    output.info('');
    output.success('****************************************');
    output.info('');
  }
}
