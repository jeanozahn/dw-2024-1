const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //faça algo, e calcule o tempo que isso levou
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()