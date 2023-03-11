let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p1---执行了")
        }, 10000);
    })
}
let p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p2---执行了")
        }, 1000);
    })
}
let p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("p3---执行了")
            reject("p3---失败了")
        }, 6000);
    })
}

export {
    p1,
    p2,
    p3
}