import RunExperiments from './definitions/RunExperiments';

class ConsoleExperiments extends RunExperiments {

  runTryIfObjectConsole() {
    const log = function(...a) { console.log(...a) };
    log('\nhello again');
  }

  runExportToGlobal() {
    const args = ["[LOG] Just a string to print"];
    const args2 = ["[WARN] Just a string to print as warning"];

    require("./config/configure");

    log(...args);
    funcLog('warn')(...args2);
  }

  runColourfullPrinting() {
  }

  runColourfullPrinting() {
    require("./config/configureWithColors");
    console.log('                                               (also exported into global from "configureWithColors.js")')

    console.log("%cHere is a title %c... and then %csome more text. %cHoray!!!!", "color: red", "color:blue; font-weight: bold", "color: green","color: normal");

    logGreen('This is green');
    logYellow('This is yellow');
    logRed(`And this ... it's red`);
    logWhite(`The white rabbit`);
  }
  
}


export default new ConsoleExperiments();