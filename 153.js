/**
要求如下：

要求最大并发数 maxNum
每当有一个请求返回，就留下一个空位，可以增加新的请求
所有请求完成后，结果按照 urls 里面的顺序依次打出 
*/

const pool = [1,2,3,4,5,6,7,8];

function PromiseMaxNum(num, pool){

  function fetch(param){
    return new Promise(resolve => {
      console.log(`start request ${param}`);
      setTimeout(() => {
        console.log(`end request ${param}`);
        resolve(param);
      }, Math.random()*2000);
    });
  }
  function Fetch(param){
    return fetch(param).then(res=>{
      res
    }).catch(err=>{
      err
    })
  }

  let new_pool = pool.filter((value,index) => {
    if(index < num){
      return Fetch(num, pool.splice(num, len)])
    }
  })

  Promise.all(new_pool).then((res)=>{
    console.log('res: ', res);
  }).catch(response=>{
    console.log('response: ', response);
  })
}
const callback = () => {
  console.log('run callback');
};

//它是新建一个队列
function handlerequest( max, pool,){
  const queue = [];
  const count = 0;
  const urlCount = pool.length;
  const handleRequest =  fetch(url).then((res)=>{

    count++
  }).catch(err=>{
    count++
  })

  if(requestsQueue.push(req) < urlCount){
    handleRequest(pool[++i])
  }
  handleRequest(pool[i])
}

PromiseMaxNum(3, pool, callback)
