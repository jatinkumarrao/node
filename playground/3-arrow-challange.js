const tasks ={
    tasks: [{
        text: 'Grocery Shopping',
        completed:true
    },{
        text:"Clean yard",
        completed: false
    },{
        text:"File course",
        completed: false
    }],
    gettaskstodo(){
       return this.tasks.filter((note)=> note.completed == false)  
       
    }
}

console.log(tasks.gettaskstodo())