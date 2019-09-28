// import "dotenv/config";
import RunExperiments from './definitions/RunExperiments'

class EsmExperiments extends RunExperiments {
  runLogWithObjectIssue() {
    const origLog = console.log;
    const args = ['hello there'];
    const log = function(...a) { origLog(...a) };
    log(...args);
  }
}


export default new EsmExperiments();