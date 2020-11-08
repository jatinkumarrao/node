const doworkPromise = new Promise((resolve,reject)=>{
setTimeout(()=>{
   reject("error occurs")
},2000)
})

doworkPromise.then((result)=>{
console.log("result",result)
}).catch((error)=>{
  console.log("error",error)
})