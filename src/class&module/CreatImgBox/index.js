import {CreatBox} from '../CreatBox'
class CreatImgBox extends CreatBox {
    constructor(select, data) {
        super(select, data)
        this.imgurl = data.url
        this.render()
    }
    render() {
        super.render()
        let oimg = this.ele.querySelector("img")
        oimg.src = this.imgurl
        oimg.style.width = "100px"

    }
}

export default CreatImgBox