import chalk from 'chalk';
import createApp from "./app";

const port = process.env.PORT || 3000;
const app = createApp();

app.listen(port, () => {
    console.log(chalk.green(`O servidor foi iniciado em http://localhost:${port}`));
});