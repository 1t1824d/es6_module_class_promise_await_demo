{
    let map=new Map([["name","volod"],["age",13]])
    map.set("sex","nam")
    console.log(map);
    console.log(Object.fromEntries(map));
}