{
    let f = Symbol("say")
    class PerSon {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        [f]() {
            console.log(`this.name,this.age:${this.name, this.age}`);
        }
        static vip = 0
    }
    //PerSon.vip=6
    console.log(`PerSon["vip"]:${PerSon["vip"]}`);
    let obj = new PerSon("vol", 16)
    obj[f]()
    console.log(`obj:${obj}`);
    obj.name = "狗子"
    console.log(`obj.name:${obj.name}`);
    console.log(`obj["name"]:${obj["name"]}`);

}
{
    let name = Symbol("name")
    let sex = Symbol("sex")
    let obj = {
        [name]: '二狗子',
        [sex]: "公"
    }
    obj[Symbol(name)]="三狗子"
    console.log("-----",obj);
}
{
    let Fun=Symbol("CustomFun")
    class Per{
        constructor(name,age){
            this.name=name
            this.age=age
        }
        [Fun](){
            return `${this.name}${this.age}岁了。`
        }
        static vip=true
        static vipfun(){

        }
    }
    console.log(Per.vip);
    let p=new Per("二狗子",13)
    console.log(p);
    console.log(p["name"]);
    console.log(p["age"]);
    console.log(p[Fun]());
}
{
    let s=Symbol("CustomFun")
    class Person{
        constructor(name,age){
            this.name=name
            this.age=age
        }
        say(){
            return `${this.name}${this.age}岁了。`
        }
        [s](){
            return `${this.name}${this.age}岁了。`
        }
        static vip = true
        static vipfun() {

        }
    }
    class Student extends Person{
        constructor(name,age,score){
            super(name,age)
            this.score=score
        }
        read(){

        }
    }
    let stu=new Student("二孙子",13,90)
    console.log("stu", stu);
    console.log("stu", Student.vip);
}