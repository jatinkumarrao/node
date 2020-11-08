const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve (a+b)
    },2000)
})
}
add(1,2).then((result)=>{
 //console.log(result)
 return add(result,1)
}).then((sum2)=>{
    return add(sum2,1)
  //console.log(sum2)
}).then((sum3)=>{
    //return add(sum3+1)
  console.log(sum3)
}).catch((e)=>{
    console.log(e)
})