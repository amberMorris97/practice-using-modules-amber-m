const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');

const weatherData = { perkasie: [81, 'sunny'], "new york": [68, 'cloudy'], "los angeles": [77, 'raining'] };

const argv = yargs(hideBin(process.argv)).argv;
let cityInput = argv.city.toLowerCase();

let sunny = chalk.black.bgYellow;
let rainy = chalk.white.bgBlue;
let cloudy = chalk.black.bgCyan;
let bold = chalk.bold;

if (weatherData[cityInput]) {
  const [ temperature, weatherCondition ] = weatherData[cityInput];

  const styledWeather = weatherCondition === 'sunny' ? sunny(weatherCondition) 
                      : weatherCondition === 'raining' ? rainy(weatherCondition)
                      : cloudy(weatherCondition);

  console.log(`Today's forecast in ${bold(cityInput)} is ${styledWeather} with a high of ${bold(temperature)}.`);
}


// The purpose of package.json in managing dependencies is so developers who clone this project are able to install the dependencies

// node_modules should not be included in version control because it controls all of the modules necessary for running the dependencies and can become very large

// npm install reinstalls dependencies by reading them from the package.json module. It's importance is collaborative projects is to provide all the developers working on the project with the same dependencies and versions