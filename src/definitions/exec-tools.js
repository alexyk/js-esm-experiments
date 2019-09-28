function logStart(msg, msg2) {
  if (msg2) {
    //console.log(`===============================================================================================`)
    console.log(`\n%cSTART OF           --->   ${msg2}   <---`, "font-weight: bold");
    console.log(`===============================================================================================`)
  } else {
    console.log("\n");
  }

  console.log(`> %c${msg}`, "font-weight: bold");
  console.log(`===============================================================================================`)
}

function logEnd(msg) {
  if (msg) {
    console.log(`===============================================================================================`)
    console.log(`%cEND OF             --->   ${msg}   <---\n\n`, "font-weight: bold")
  } else {
    console.log(`===============================================================================================\n\n`)
  }
}

function logProps(props, subtitle='') {
  if (subtitle) {
    subtitle = ` (${subtitle})`;
  }
  console.log(`PROPS${subtitle}:`.padEnd(35, ' ')+`${props.join(", ")}`);
}

exports.logStart = logStart;
exports.logEnd = logEnd;
exports.logProps = logProps;