// const fs=require('fs')

// const book={
//     title:"Ego is the enemy",
//     author:"Ryan holiday"
// }
// const bookJSON=JSON.stringify(book)
// const bufferdata=bookJSON.toString()
// //console.log(bufferdata)
// const data= JSON.parse(bufferdata)
// console.log(data.author)

// fs.writeFileSync('1-json.json',bookJSON)
const fs=require('fs')
 const book={
    "name":"Andrew",
    "planet":"Earth",
    "age":27
 }
 const bookJSON = JSON.stringify(book)
 fs.writeFileSync('2-json.json',bookJSON)
const databuffer=fs.readFileSync('2-json.json')
console.log(databuffer)
const buffer= databuffer.toString()
console.log(buffer)
 const data=JSON.parse(bookJSON)

console.log(data.name)
data.name="jatin"
data.age="25"
const bookJSONq = JSON.stringify(data)
fs.writeFileSync('2-json.json',bookJSONq)

console.log(data)