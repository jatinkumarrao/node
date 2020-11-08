const express=require('express')
const User=require('../models/user')
const router=new express.Router()
const redis =require('redis');
const auth=require("../middleware/auth")
const REDIS_PORT= 6379;

const client = redis.createClient(REDIS_PORT);
//app.use(cors()); 
// Cache middleware

function cache(req,res,next){
client.get("key",(err,data)=>{
    if(err) throw err;
    if(data !==null){
       var parseData = JSON.parse(data); 
        console.log("Redis data: ", parseData);
        res.json(parseData);
    }else{
        next();
    }
})
}
router.get('/users',cache,async(req,res)=>{
    try{
//       const{ username}="User"
     const users=  await User.find({ })

     const repos = users[0].Users
        console.log("DB Data: ", repos);
     //set data to redis
     client.setex('key', 3600, JSON.stringify(repos));

     res.json(repos);
    // res.send(repos)
    }
    catch(e){
        res.status(500).json(e)
    }
})
router.post('/users',async(req,res)=>{
try{
        const user=  await User.findOneAndUpdate({})
        console.log('user',user)
        user.Users = user.Users.concat(req.body); // or however you want to "merge"
      //  console.log('item',item)
      user.save()
      res.status(201).json(user)
}
catch(e){
    res.status(400).json(e)
}//user.save().then(()=>{
      //  res.status(201).send(user)
   // }).catch((e)=>{
     //   res.status(400).send(e)
   // })
    })
module.exports=router