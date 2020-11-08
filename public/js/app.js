//console.log("javascript")

// function getValue(){
//     const weatherform =document.querySelector('form')
//     const search=document.getElementById('name')
//      var x = document.getElementById("myForm").elements[0].value;
// weatherform.addEventListener("submit", function(event){
// event.preventDefault();
// console.log(x)
// console.log(search.value)

// });
// }


 const weatherForm=document.querySelector('form')
 const search=document.querySelector('input')
 const messageOne=document.querySelector('#message-1')
 const messageTwo=document.querySelector('#message-2')
 weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
     messageOne.textContent="loding..."
     messageTwo.textContent=""
     fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
    if(data.error){
        messageOne.textContent=data.error
       // console.log(data.error)
    }
    else{
        messageOne.textContent=data.forecast
        messageTwo.textContent=data.location
        //console.log(data.forecast)
        //console.log(data.location)
    }
    
})
})
 })


//     let response = await fetch('/article/formdata/post/user', {
//       method: 'POST',
//       body: new FormData(formElem)
//     });

//     let result = await response.json();

//     alert(result.message);
//   };
