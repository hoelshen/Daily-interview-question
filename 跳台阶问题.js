function run(n){
  if(n == 1) return 1
  if(n <= 2) return 2
  
  const list =[] 
  return run(n) = run(n-1) + run(n-2)
};
const val = run(3)
console.log('val: ', val);

function test(){
  let arr = [1,1];
  for(let i =2; i<= n; i++){

         arr[i] = arr[i-1] + arr[i-2]
  }

  return arr[n]

}
test(10)