
//具体思路是将状态控制住
/* const pool = [1,2,3,4,5,6,7,8];


Promise.lock() = function(onLock) {
  if(lock.wait == 0){
    return fetch()
  }
}
 */

// 参数设置两种，withOutLock用于某些不需要等待的请求直接跳过逻辑，lockOthers用于锁住在关键请求之后进来的请求


// 请求锁要管理两种状态，一种是关键请求进行是状态，一种是当关键请求失败了之后，需要等待辅助操作完成的状态


// 关键请求进来直接执行，lock.runing直接赋予关键请求的pending状态，当其他请求进来的时候，都直接等待，不进行请求发起，等主要请求进来完成之后，其他才开始执行


const request = async (
  name,
  opts = { withOutLock: false, lockOthers: false, hasErr: false }
)=>{
  console.log('withOutLock', opts.withOutLock)
  if(opts.withOutLock){
    const res = await mockRequest(`${name} - withOutLock`)
    console.log(res)
    return
  }
  console.log('lock.runing', lock.runing);
  if(lock.runing){
    console.log(`${name}---------------wating...`)
    await lock.runing;
  }


  // 锁住之后进来的请求
  if (opts.lockOthers) {
    lock.runing = mockRequest(name, 4000);
    let res = await lock.runing;
    console.log('res24: ', res);
    // 清空进行锁
    lock.runing = null;

    // 模拟关键请求失败的 需要再次等待其他操作的情况 例如重新登陆等
    if (opts.hasErr) {
      lock.wait = mockRequest("关键请求异常处理", 4000);
    } else {
      console.log(res);
      return;
    }
  }
  
  // 等待模拟关键请求失败的处理
  console.log('lock.wait: ', lock.wait);
  if (lock.wait) {
    console.log(`等待关键请求异常处理中...`);
    await lock.wait;
    // 清空等待锁
    lock.wait = null;
    console.log(`关键请求异常处理完成`);
  }
  const res = await mockRequest(name);

  console.log('233res', res);
  
  return;
}



const lock = { wait: null, runing: null };

function mockRequest(param){
  return new Promise(resolve => {
    console.log(`start request ${param}`);
    setTimeout(() => {
      console.log(`end request ${param}`);
      resolve(param);
    }, Math.random()*2000);
  });
}

const mockConcurrent = ()=>{
  for(let i= 0; i< 5; i++){
    setTimeout(()=>{
      request(`并发请求${i}`, { withOutLock: i === 0})
    }, Math.random() * 100)
  }
} 


request("关键请求 - 其他需要等待完成才能进行", {
  lockOthers: true,
  hasErr: false
})
mockConcurrent();
