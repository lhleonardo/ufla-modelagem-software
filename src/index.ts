import chalk from "chalk"
import figlet from "figlet"
import { program } from "commander"

console.log(
    chalk.red(
        figlet.textSync("saudacoes-cli", { horizontalLayout: "full" })
    )
);

type Opcoes = {
    name: string;
}

program
    .version("1.0")
    .description("Um exemplo de CLI para dar saudações")
    .option("--name <nome>", "Informar o nome")
    .parse(process.argv);

const options = program.opts<Opcoes>();

if (!process.argv.slice(2).length) {
    program.outputHelp();
}


if (options.name) console.log(`Olá, ${options.name}. Seja bem-vindo.`);
