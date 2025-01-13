

//注意内存泄漏问题 及时释放
export function closureTest(){
  let a = 10;
  return function(){
    a++;
    console.log(a)
  }
}
