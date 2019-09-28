const RunExperiments = require('./definitions/RunExperiments');

class NoESMExperiment extends RunExperiments {
  constructor() {
    super();
  }

  runJustTry() {
    const log = function(...a) { console.log(...a) };
    log('\nhello again');
  }
}

module.exports = new NoESMExperiment();