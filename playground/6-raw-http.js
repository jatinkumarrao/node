const https=require('https')
const { response } = require('express')
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiamF0aW5rdW1hcnJhbyIsImEiOiJja2Rma2h6M3IyZHl3MnlrNnYxaHZtOHlyIn0.b2eOSmWFk9-ChP6WFhu5iw&limit=1' 

const request=https.request(url,(response)=>{
    let data =''
    response.on('data',(chunk)=>{
         data = data+chunk.toString()
       
    })

    response.on('end',()=>{
        const body= JSON.parse(data)
        console.log(body)

    })
})
request.on('error',(error)=>{
    console.log('An error',error)
})
request.end()