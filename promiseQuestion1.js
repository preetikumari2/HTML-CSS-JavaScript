function promise() {
    let data = 3;
    return new Promise(function(resolve, reject){
        if(isNaN(data)){
            (reject("error"));
        }
        else if( data % 2 != 0){
            setTimeout(function(){
                console.log("odd")
                resolve();
            },1000)
        }else if(data %2 == 0){
            setTimeout(function(){
                reject("even");
            },2000)
        }
    })
}
promise().catch((err)=>{console.log(err)})