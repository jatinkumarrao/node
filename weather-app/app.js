const request = require('request')
const geocode= require('./utils/geocode')
const forecast = require('./utils/forecast')

const address=process.argv[2]
if(!address){
  return  console.log("please provide the address")
}
else{
    geocode(address,(error,data)=>{
       if(error){
       return console.log('Error',error)
       }
         forecast(data.latitude,data.longitude,(error,forcas)=>{
             if(error){
             return  console.log('Error',error)
             }   
             console.log("data",forcas)
         })
        
     })
    
}
// console.log(process.argv)