
const fs= require('fs') 
const chalk=require('chalk')
const getNotes = ()=>{
    return"my first note"

}

const add= (title,body)=>{
  const deffer= load()
//   const duplicate =deffer.filter((note)=> note.title == title)
   const duplicates=deffer.find((note)=> note.title== title)
  if(!duplicates){
    deffer.push({
        title: title,
        body: body
      })    
      console.log("new note added")
       Savenotes(deffer)  
  }
//   if (duplicate.length ==0){
//     deffer.push({
//         title: title,
//         body: body
//       })    
//       console.log("new note added")
//        Savenotes(deffer)    
//   }
  else{
      console.log("already taken")
  }
  
}
const read=(title)=>{
const notes= load()
const note=notes.find((note)=> note.title== title)
if(note){    
console.log(chalk.inverse(note.title))
console.log(note.body)
}
else{
console.log(chalk.inverse.red('No note found'))
}
}
const Removenotes = (title)=>{
    const deffer= load()
    const remove= deffer.filter((note) => note.title !==title)
    if(deffer.length>remove.length){
        Savenotes(remove)     
    console.log(chalk.green.inverse("found and remove"))
    }
    else{
        console.log(chalk.red.inverse("Not found"))    
    }
}
const list=()=>{
    const notes = load()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((notes)=>{
        console.log(notes)
    })
}
const Savenotes = (note1)=>{
    const DataJSON=JSON.stringify(note1)
   // console.log(DataJSON)
    const note=fs.writeFileSync('data.json',DataJSON)

}
const load =()=>{
    try{
        const data= fs.readFileSync('data.json')
        console.log('data',data)
        const buffer =data.toString()
        console.log("buffer",buffer)
        const notes=JSON.parse(buffer)
        return notes
    }
    catch(e)
    {
        return []
    }
   
}
module.exports= {
    getNotes: getNotes,
    add:add,
    Removenotes:Removenotes,
    list:list,
    read:read
}