const processObj = require('process');


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Here is a SUPER SECRET! SSHHH! ");
    console.log(processObj.env.SUPER_SECRET);
    await sleep(5000);
  }
}

main();
