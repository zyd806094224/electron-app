

export function promiseAllTest(){
//   实例p的状态由p1、p2、p3决定，分为两种：
//
// 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数
//   只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数
//   注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法
  const p1 = new Promise((resolve, reject) => {
    // resolve('p1')
    reject('p1')
    // throw new Error('报错了')
  }).then(result => {
    console.log("p1-res:",result)
    return result
  })

  const p2 = new Promise((resolve, reject) => {
    // throw new Error('报错了')
    setTimeout(() => {
      resolve('p2')
    },5000)
    // reject('p2')
  }).then(result => {
      console.log("p2-res:",result)
      return result
    })
    // .catch(e => e)

  Promise.all([p1, p2])
    .then(result => console.log("all--",result),
    err => {
      console.log("all_err--",err)
    })
    .catch(e => console.log("all-e--",e))
}

export function promiseRaceTest(){
  // 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变
  // 率先改变的 Promise 实例的返回值则传递给p的回调函数
  let p1= new Promise((resolve, reject) => {
    // resolve('p1')
    reject('p1')
    // throw new Error('报错了')
  }).then(result => {
    console.log("p1-res:",result)
    return result
  }).catch(e => {
    console.log("p1-e:",e)
    return e
  })
  let p2 = new Promise((resolve, reject) => {
    // throw new Error('报错了')
    // setTimeout(() => {
    //   resolve('p2')
    // },5000)
    reject('p2')
  }).then(result => {
    console.log("p2-res:",result)
    return result
  })
  .catch(e => e)

  const p = Promise.race([p1, p2]);

  p.then(result => {
    console.log("raceRes=>",result)
  }).catch(e => {
    console.log("raceErr==>",e)
  })
}

