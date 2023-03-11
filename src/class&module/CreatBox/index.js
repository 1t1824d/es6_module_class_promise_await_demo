class CreatBox {
    constructor(select, data) {
        this.ele = document.querySelector(select)
        this.title = data.title
        this.list = data.list
        this.render()
    }
    render() {
        let ohl = this.ele.querySelector(".ch2")
        let oul = this.ele.querySelector("ul")
        ohl.innerHTML = this.title
        oul.innerHTML = this.list.map(item => `<li>${item}</li>`).join("")
        console.log("123456");
    }
    
}

export {
    CreatBox  
}