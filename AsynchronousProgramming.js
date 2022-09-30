//Asynchronous Programming
addNumber=()=>{
    let a = 10
    let b = 20
    setTimeout(()=>{
        console.log("Adding a and b : " +(a+b));
    },2000);
}

multiplyNum=()=>{
    let a = 50
    let b = 3
    let c = a + b
setTimeout(()=>{console.log("Multiplying a and b: "+c);},1000);
}

message=()=>{
    console.log("Enjoying learning");
}

addNumber();
multiplyNum();
message();


//callbacks code
message=()=>{
    console.log("I am learning Arithmatic operations");}
    
addNum=()=>{
    let a = 10;
    let b = 20;
    let c = a + b;
    setTimeout(()=>{
    console.log("Adding Number: "+c); 
    },1000);} 

subNum=()=>{
    let a = 10;
    let b = 20;
    let c = b - a;
    setTimeout(()=>{
    console.log("Subtract Number: "+c); 
    },2000);} 


mulNumber=(callback)=>{
    let a = 10;
    let b = 20;
    let c = a + b;
    setTimeout(() => {console.log("Multiplying Number: "+c); callback()},1000);}

mulNumber(function (){
    message();
    addNum();
    subNum();
})


//promises code
addNum=()=>{
    return new Promise((resolve,reject)=>{
        let a = 10
        let b = 20
        let c = a + b
      setTimeout(()=>{console.log("Adding: "+c);},500);        
      resolve();})
    }

subNumber=()=>{
    return new Promise((resolve,reject)=>{
        let a = 10
        let b = 20
        let c = b - a
        if(c)
        {
        setTimeout(()=>{console.log("Subtract the number: "+c);},1000);
        resolve();
        }
        else
        reject("Error occured here");});}

mulNum=()=>{
    return new Promise((resolve,reject)=>{
        let a = 10
        let b = 20
        let c = a * b
        setTimeout(()=>{console.log("Multiplying Number: "+c);},1000); resolve();})}
addNum().then(mulNum).then(subNumber).catch((err)=>{console.log("Exception : "+err)});


//Async and await
addNum=()=>{
        let a = 10
        let b = 20
        let c = a + b
        setTimeout(()=>{console.log("Adding number: "+c);},500);}
    
subNum=()=>{
        let a = 10
        let b = 20
        let c = b - a
        setTimeout(()=>{console.log("Subtract Number: "+c); },2000);} 

mulNum=()=>{
        let a = 10
        let b = 20
        let c = a * b
        setTimeout(()=>{console.log("Mutiplying the Number: "+c);},1000);}

async function menu()
{
    await subNum();
    await mulNum();
    await addNum();
}

menu().then(()=>{
    setTimeout(()=>{console.log("Everything working fine");},2500);
});
