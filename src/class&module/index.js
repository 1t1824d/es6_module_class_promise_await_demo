import {CreatBox}  from './CreatBox'
let data1 = {
    title: "父类创建",
    list: ["父类创建-1", "父类创建-2", "父类创建-3",]

}
new CreatBox(".box1", data1)
import CreatImgBoxTest from "./CreatImgBox"
let data2 = {
    title: "子类继承父类创建",
    url: "./vite.svg",
    list: ["子类继承父类创建-1", "子类继承父类创建-2", "子类继承父类创建-3",]

}

new CreatImgBoxTest(".box2", data2)