const {execArgv, argv} = process;
const allArgs = execArgv.join(' ') + argv.join(' ')
var noESMOrBabel = !allArgs.includes('esm') && !allArgs.includes('babel') && !allArgs.includes('build');
global.noESMOrBabel = noESMOrBabel;


if (noESMOrBabel) {
  require('./no-esm-experiments').start();
} else {
  require('./console-colours-and-global').default.start();
  require('./esm-with-dotenv-experiments').default.start();
}

