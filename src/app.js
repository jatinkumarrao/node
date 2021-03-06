const path = require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forcast=require('./utils/forecast')

const app= express()
//Define paths for Express config
const publicDirectoryPath =path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname,'../templates/partials')

//Setup handlers engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.get('/weather',(req,res) =>{
    if( !req.query.address){
        return res.send({
            error: "Address is not provide"
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({
                'error':error
            })
        }
        forcast(data.latitude,data.longitude,(error,forcas)=>{
            if(error){
                return res.send({
                    'error':error
                })
            }
            res.send({
     forecast:forcas,
     location:data.location,
     Address: req.query.address
 })

        })
    })
})
app.get('/about',(req,res) =>{
    res.render('about', {
        title: 'About Me',
        name:'Jatin Kumar Rao'
    })
})

app.get('/help',(req,res) =>{
    res.render('help', {
        title: 'Help',
        helpText:'This is some helpful text',
        name:'Jatin Kumar Rao'
    })
})

app.get('',(req,res) =>{
    res.render('index', {
        title: 'weather app',
        name:'Jatin Kumar Rao'
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
      return res.send({ 
           error:"You must provide a search term"
    })
}
    console.log(req.query)
    res.send({
            products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render("404",{
        title: '404',
        name:'Jatin Kumar Rao',
        errorMessage:"Help article not found"
    })
})
app.get('*',(req,res)=>{
     res.render("404",{
      title: '404',
      name:'Jatin Kumar Rao',
      errorMessage:"Page not found"  
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})