import {
    p1,
    p2,
    p3
} from './com'


let promiseAll=(methods)=>{
    Promise[methods]([p1(), p2(), p3()]).then((res) => {
        console.log(`%cPromise[${methods}]执行成功了`, "color: green;font-size:16px", res)
    })
    .catch((error) => {
        console.log(`%cPromise[${methods}]执行失败了----catch`,"color: red;font-size:16px", error)
    })
}

export default promiseAll
export * as MethodsName from './var'
