const processObj = require('process');


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`HERE IS A SUPER SECRET ${processObj.env.NAME} ! SSHHH! `);
    console.log(processObj.env.SUPER_SECRET);
    await sleep(5000);
  }
}

main();
