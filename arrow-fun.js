let a={
    name:'AA',
    run1:function (){
        console.log(this.name)
    }
}
a.run1(); //

let run2=function (cb){
    cb();
    a.run1();
}
run2(a.run1)

let b={
    name:'AA',
    run1:function (){
        let phuong=this;
        let run3=function (){
            let run4=function (){
                console.log(phuong.name)
            }
            run4()
        }
        run3()
    }
}

b.run1()