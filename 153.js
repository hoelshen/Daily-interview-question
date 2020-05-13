/**
要求如下：

要求最大并发数 maxNum
每当有一个请求返回，就留下一个空位，可以增加新的请求
所有请求完成后，结果按照 urls 里面的顺序依次打出 
*/

const pool = [1,2,3,4,5,6,7,8];


function fetch(param){
  return new Promise(resolve => {
    console.log(`start request ${param}`);
    setTimeout(() => {
      console.log(`end request ${param}`);
      resolve(param);
    }, Math.random()*2000);
  });
}
function Fetch(num,param){
  return fetch(param).then(res=>{
    res
  }).catch(err=>{
    err
  })
}
const callback = () => {
  console.log('run callback');
};

function PromiseMaxNum(num, pool){
  let new_pool = pool.filter((value,index) => {
    if(index < num){
      return Fetch(num, value)
    }
  })

  Promise.all(new_pool).then((res)=>{
    console.log('res: ', res);
  }).catch(response=>{
    console.log('response: ', response);
  })
}

// PromiseMaxNum(3, pool, callback)

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

const sendRequest = (urls, max, callback)=>{
  let finished = 0;
  const total = urls.length;
  const handler  = ()=> {
    if(urls.length){
      const url = urls.shift();
      fetch(url).then(()=>{
        finished ++ ;
        handler();
      }).catch(e=>{
        finished ++ ;
        throw Error(e)
      })
    }

    if(finished >= total){
      callback()
    }
  }
  for(let i= 0; i< max; i++){
    handler()
  }
}

sendRequest(pool, 3, callback)
