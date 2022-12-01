// const obj = {
//   name: "abc"
// }

// console.log(obj)

//==============================
//code related to ajax
//==============================
// const responsePromise = fetch('https://jsonplaceholder.typicode.com/todos')
// // console.log(responsePromise)

// responsePromise.then(function(response){
//   console.log('Fetched successfully')
//   // console.log(response)

//   response.json().then(function(data){
//     // console.log(data)
//     // console.log(data[0].title)
//     const paragraphs = data.map(todoItem => `<li>${todoItem.title}</li>`)

//     // document.body.innerHTML = paragraphs
//     document.body.querySelector('div').innerHTML = `<ul>${paragraphs.join('')}</ul>`
//   })

// }).catch(function(){
//   console.log('Error')
// })

// console.log('Getting the data')
// //this will log before .then console log because of asynchronous

//==========================================
//refactoring the code
//==========================================
const getDataBtn = document.getElementById('getData')
getDataBtn.addEventListener('click', handleBtnClick)

function handleBtnClick(){
  getDataFromServer()
}

async function getDataFromServer(){
  try {
    const responseObj = await fetch('https://jsonplaceholder.typicode.com/todos')
    // console.log(responseObj)
    const jsonData = await responseObj.json()
    // console.log(jsonData)
    const paragraphs = jsonData.map(todoItem => `<li>${todoItem.title}</li>`).join('')
    document.getElementById('todoItems').innerHTML = `<ul>${paragraphs}</ul>`


  } catch (error) {
    document.getElementById('todoItems').innerHTML = 'Error Occured'
  }  
}




