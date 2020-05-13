const pool = [1,2,3,4,5,6,7,8];
const lock = { wait: null, runing: null };

function fetch(param){
  return new Promise(resolve => {
    console.log(`start request ${param}`);
    setTimeout(() => {
      console.log(`end request ${param}`);
      resolve(param);
    }, Math.random()*2000);
  });
}



Promise.lock(){

}