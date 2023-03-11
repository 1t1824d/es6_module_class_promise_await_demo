
let resdata = import('./module')
resdata.then(resModule => {
    resModule.axiosfun().then(res => {
        console.log(res)
    })

})
