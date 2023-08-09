import chalk from 'chalk';
import { CliCommandInterface } from './cli-command.interface.js';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            main.js --<${chalk.blue('command')}> [${chalk.greenBright('--arguments')}]
        Команды:
          ${chalk.greenBright('--version')}:                   ${chalk.hex('#B414AF')('# выводит номер версии')}
          ${chalk.greenBright('--help')}:                      ${chalk.hex('#B414AF')('# печатает этот текст')}
          ${chalk.greenBright('--import')} ${chalk.yellowBright('<path>')}:             ${chalk.hex('#B414AF')('# импортирует данные из TSV')}
          ${chalk.greenBright('--generate')} ${chalk.yellowBright('<n> <path> <url>')}:  ${chalk.hex('#B414AF')('# генерирует произвольное количество тестовых данных')}
        `);
  }
}
