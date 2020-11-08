// file system
// const fs = require('fs')

// // fs.writeFileSync('note.txt','hello my name is jatin')
// fs.appendFileSync('note.txt','nyfvdmfvnfd')

// expoert file
// const add = require('./utils.js')

// const sum = add(2,2)
// console.log(sum)
// const chalk=require('chalk')

// const validator=require('validator')
// console.log(validator.isEmail('jatinkumar'))
// console.log(validator.isURL('https:'))
// console.log(msg)
// console.log(chalk.inverse.bold.green('success!'))
// console.log(process.argv[2])
const validator=require('validator')
const getNotes=require("./notes.js")
// const comand = process.argv[2]
// const comand1 = process.argv[3]
// const comand2 = process.argv[4]
// if (comand == "add"){
//     result = comand1+comand2
//     console.log("add sucess",result)
// }
// else if(comand == "mul"){
//     result = comand1*comand2
//     console.log("mul success",result)
// }
const yargs = require('yargs')
const notes = require('./notes.js')
const { describe, demandOption } = require('yargs')
//const { require } = require('yargs')

yargs.command({
    command:"read",
    describe:"read a note",
    builder:{
        title:{
            describe:"read",
            demandOption: true,
            type:"string"

        }
    },
    handler(arvg){
        getNotes.read(arvg.title)
    }
})
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
         describe: "title to add",
         demandOption: true,
         type:'string'   
        },
        body:{
            describe: "body part",
            demandOption: true,
            type:"string"
        }
    },
    handler(argv){
        getNotes.add(argv.title,argv.body)
        console.log('title:'+ argv.title)
        
        console.log('body:',argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler(argv){
        getNotes.Removenotes(argv.title)
        console.log('removing a  note')
    },
})


yargs.command({
    command:'list',
    describe:'list of note',
    handler(){
        getNotes.list()
    }
})
yargs.parse()