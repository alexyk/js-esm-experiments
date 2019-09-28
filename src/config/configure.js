const origLog = console.log;

const funcLog = (type) => (...a) => {
  switch (type) {
    case 'log':
      origLog.call(console, ...a);
      break;
      
      case 'warn':
        console.warn(...a);
        break;
        
    default:
      origLog.call(console, ...a);
      break;
  }
}

globalThis.log = funcLog('log');
globalThis.ilog = funcLog('info');
globalThis.wlog = funcLog('warn');
globalThis.elog = funcLog('error');
globalThis.logRed = funcLog('red');
globalThis.logGreen = funcLog('#008800');
globalThis.logYellow = funcLog('#998800');
globalThis.logWhite = funcLog('#FFF');
globalThis.funcLog = () => () => {}