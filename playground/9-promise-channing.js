require('../task-manager/src/db/mongoose')
const Task= require('../task-manager/src/models/task')
const { findByIdAndDelete } = require('../task-manager/src/models/task')

// Task.findByIdAndDelete('5f303da8e8c26b0b8ccb9ab3').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//   console.log("result",result)
// }).catch((e)=>{
//     console.log(e)
// })

const deletetaskandcount=async(id)=>{
    const task=await Task.findByIdAndDelete(id)
    const task1=await Task.countDocuments({completed:false})
    return task1
}
deletetaskandcount("5f324a0d62e19f4538ac32a1").then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})