import chalk from 'chalk';

export default class {
  /**
   *
   * @param {string} message
   */
  static success(message) {
    console.log(chalk.green(message));
  }

  /**
   *
   * @param {string} message
   */
  static warning(message) {
    console.log(chalk.yellow(message));
  }

  /**
   *
   * @param {string} message
   */
  static error(message) {
    console.error(chalk.bgRed(message));
  }

  /**
   *
   * @param {string} message
   */
  static info(message) {
    console.log(chalk.cyan(message));
  }
};