// import "dotenv/config";
import RunExperiments from './definitions/RunExperiments'

class EsmExperiments extends RunExperiments {
  runLogWithObjectIssue() {
    const origLog = console.log;

    const args = ['hello there - with issue'];
    let log = function(...a) { origLog(...a) };

    console.log('%cObject issue:', 'color:green');
    log(...args);

    console.log('%cNormal print:','color:green');
    console.log('hello there - normal:', 'with', 'several', 'params');
  }
}


export default new EsmExperiments();