let axiosfun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("动态模块import()使用测试")
        }, 6000);
    })
}

let axios = axiosfun()

export {
    axiosfun
}