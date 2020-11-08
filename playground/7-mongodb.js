//const monogodb=require("mongodb")
const {MongoClient,ObjectID}=require("mongodb")

const connectionURL="mongodb://127.0.0.1:27017"
const databaseName="Jatin"

MongoClient.connect(connectionURL,{useNewUrlParser:true, useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log('error',error)
    }
    console.log("connected")
    const db =client.db(databaseName)
//     db.collection("user").insertMany([
//         {
//         name:"jatin",
//         age:25,
//         completed:true
//     },
//     {
//         name:"arun",
//         age:25,
//         completed:false
//     },
//     {
//         name:"varun",
//         age:25,
//         completed:false
//     }
// ],(error,result)=>{
//         if(error){
//             return console.log("unable to find result")
//         }
//         console.log(result.ops)
//     })
    // db.collection("user").find({
    //     name:"jatin"
    // }).toArray((error,result)=>{
    //     if(error){
    //         return console.log("unable to find result")
    //     }
    //     console.log(result)
    // })
    // db.collection("user").findOne({
    //     _id: new ObjectID("5f2fa16bab4c1e47f83a5beb")
    // },(error,result)=>{
    //     if(error){
    //         return console.log("unable to find result")
    //     }
    //     console.log(result)
    // })
//     db.collection("user").updateOne({
//         _id: new ObjectID("5f2fa0f1d89ec740a446f8a8")
//     },{
//         $set:{
//                 name:"Ankur"
//         }
//     }).then((result)=>{
//     return console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
db.collection("user").deleteMany({
    name: "jatin"
}).then((result)=>{
return console.log(result)
}).catch((error)=>{
console.log(error)
})
})