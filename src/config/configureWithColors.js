const cl = console.log
const funcLog = (type) => (...args) => {
  // if (args && args.length && args.length >= 2 && isObject(args[0]) && isObject(args[1])) {
    // cl(...args.slice(2));
    // return;
  // }

  switch (type) {
    case "log":
    case "info":
    case "warn":
    case "error":
      break;

    default:
      args = ['%c'+args.join(', '), `color: ${type}`]
      break;
  }

  let arg1 = args[0];

  switch (args.length) {
    case 1:
      cl(arg1);
      break;
    case 2:
      cl(arg1, args[1]);
      break;
    case 3:
      cl(arg1, args[1], args[2]);
      break;
    case 4:
      cl(arg1, args[1], args[2], args[3]);
      break;
    case 5:
      cl(arg1, args[1], args[2], args[3], args[4]);
      break;
    case 6:
      cl(arg1, args[1], args[2], args[3], args[4], args[5]);
      break;
  }
}


console.__proto__.log = funcLog('log');
console.__proto__.info = funcLog('info');
console.__proto__.warn = funcLog('warn');
console.__proto__.error = funcLog('error');

globalThis.log = funcLog('log');
globalThis.ilog = funcLog('info');
globalThis.wlog = funcLog('warn');
globalThis.elog = funcLog('error');
globalThis.logRed = funcLog('red');
globalThis.logGreen = funcLog('#008800');
globalThis.logYellow = funcLog('#998800');
globalThis.logWhite = funcLog('#FFF');
globalThis.funcLog = funcLog;