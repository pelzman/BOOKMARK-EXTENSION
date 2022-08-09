// let myLeads =  ['www.log.com', 'www.push.com', 'www.log.com']
let myLeads = []
//converting string to array
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// console.log(myLeads)

//converting array to string
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const container = document.getElementById('container')
const tabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('delete-btn')

// localStorage.setItem("myLeads", www.log.com)
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()
//To get leads from the localStorage
 JSON.parse(localStorage.getItem("myLeads"))
 //store it in a variable, leadFromLocalStorage



 const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))

// ["leads1", "leads2"] or null ie checking if truthy or falsy
 if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)    
}



tabBtn.addEventListener("click", function(){
   
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads)
         )
         render (myLeads)
    })
    //logging out url


    // console.log(tabs[0].url)
    //lets save url instead of of logging it out
  
})

function render(leads){
    let listItems = ''
    for (let i = 0; i < leads.length; i++){
        // console.log(leads[i]) 
     
    
        // listItems += " <li> <a href='#'  target = '_blank'>" + myLeads[i] + "</a></li>" 
       //template string

       listItems += `
       <li> 
       <a   target = '_blank' href=${leads[i]}>
       ${leads[i]} </a>
       </li>`
       
       
    
        //to render the values into list items
         
        //another method of writing this
        //create element
        //set text content
        //append to ul
    //    const li =  document.createElement("li")
    //    li.textContent = myLeads[i]
    //    ulEl.append(li)
     
    }
    ulEl.innerHTML = listItems

   
}

//log out the variable
console.log(leadsFromLocalStorage)
// setting up delete button
// 1. create and style the delete button
// 2. listen for double clicks on the delete button()
//3. when clicked, clear localStorage, myLeads and DOM
deleteBtn.addEventListener('dblclick', function(){
    

localStorage.clear()
myLeads = []
render(myLeads)
   
  })

inputBtn.addEventListener('click', function (){
//push value from the inputEl into the myLead array

//instead of the hard-coded 'www.push.com' value

myLeads.push(inputEl.value)
inputEl.value = ""
 localStorage.setItem("myLeads",JSON.stringify(myLeads))
render(myLeads)
console.log(localStorage.getItem("myLeads"))



})

//using template strings
// let sender = "pelzman"
// const recipient = "James"
// const email = `
// Hey ${recipient}! 
// How is it going? cheers 
// ${sender}`

// console.log(email)



// const welcomeEl = document.getElementById('welcome-el')

// function greetUser( greeting, name){
//     welcomeEl.textContent = ` ${greeting} ${name}` 
// }
// greetUser(  "Hello", "wale")

// function add(a,b){
//  return (a + b)
// }
// console.log(add(3,4))
// console.log(add(9,102))

// function getFirst(arr){
//     return arr[0]
// }
// console.log(getFirst([3,6]))

//SETTING THE STAGE
const player = "per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false 

//PLAYING THE GAME
points += 100
hasWon = true

//ANNOUNCING THE WINNER
if(hasWon){
console.log(`${player} got ${points} and won the ${game} game!`)
}
else{
    console.log(`The winner is ${opponent} ! ${player} lost the game`)
}
console.log(hasWon)


// logging array items into console

let myCourses = ["learn CSS Animations", " UI Design  Fundamentals", "Intro to Clean Code"]
 function logItems (arr){
    for(let i = 0; i< arr.length; i++){
        console.log(arr[i])
    }
    }

  logItems(myCourses)

  //SAVING VALUES IN LOCAL STORAGE
// let item = localStorage.getItem("myCourses")
// console.log(item)



let data = [{
    players: "Jane",
    score: 52    
},

{
    player: "Mark",
    score: 41
}
]
// Adding listener to button
// const logBtn = document.getElementById('log-btn')
// logBtn.addEventListener('click', function(score){

//     console.log(data[0].score)


// })





function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for(let i = 0; i < arr.length; i++){
        if(i === lastIndex ){
            
        baseString += arr[i] 
        }
        else{
            
        baseString += arr[i] + ", "
        }
       
    }
   return baseString
}
const sentence = generateSentence("Largest Country" , ["China", " India", "USA"])
console.log(sentence)



 

