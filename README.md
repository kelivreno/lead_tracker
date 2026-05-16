# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite

## Things I learned: 

## Let and Const:
Const is not re-assignedable, otherwise if you would like to reassign a value in the process, it should be a let. 

Example use case: 
```js

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


```

## innerHTML:
You can change properties of the HTML.

```js
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"
```

## createElement() and append():

```js
for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i]  + "</li>"
    // create element
    const li = document.createElement("li")
    // set text content
    li.textContent = myLeads[i]
    // append to ulEl
    ulEl.append(li)
}

```

## Template literal:
Use `` instead of "" or '', the reason to use this is to call variables using `${variable}` within a given code

Example:
```js
const email = `Hey ${recipient}! How is it going? Cheers Per`
```

## Convert string into numbers using Number(): 

```js
const numOneVal = Number(numOneInput.value); 
```

## Local storage:
```js
localStorage.setItem("myLeads", "www.example.com")
let localStored = localStorage.getItem("myLeads")
console.log(localStored)
localStorage.clear()
// -||-.setItem(key, value)
```

### Converting array in local storage into string and vice-versa: 
```js
JSON.stringify() //array -> string
JSON.parse() // string to array
```

## Truthy and faulsy values:

Just remember these **Faulsy** numbers, other than these are truthy:

```js

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN
// -

```

## Adding a parameter:
So that the function is dynamic
```js
const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting+ ", Per Harald Borgen 👋"    
}

greetUser("Sup")
```

### Using multiple parameters?
```js
const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {
    welcomeEl.textContent = greeting + ", " + name + " 👋"    
}

greetUser("Howdy", "James")
```

### Arguments vs Parameter:
Parameter = the empty label
Argument = the real value you give it

```js
			//parameters
function add(num1, num2) {
    return num1 + num2
}

	//arguments
add(3, 4)
```

Resources: [TypeAlias](https://typealias.com/guides/parameters-arguments/)

## Objects in arrays: 

For example, `tabs[0].url` is how you access a key for a specific element in the array.

## Save tab (RIP):
Deleted this code but here's what I used it:

```js
const tabBtn = document.getElementById("tab-btn")

tabBtn.addEventListener("click", function() {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // Save the url instead of logging it out
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
```

## Local Storage (RIP):
Deleted this one too as I was transitioning to Firebase:

```js
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    // myLeads = []
    // render(myLeads)
})


inputBtn.addEventListener("click", function() {
    // newInput = inputEl.value
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // myLeads = JSON.stringify(myLeads)
    inputEl.value = "" //clear the input field
    
    render(myLeads)

    // console.log(localStorage.getItem("myLeads"))
    // console.log(myLeads)
    // renderLeads()
})
```

## Pushing data to Firebase Realtime Database:
1. Make sure the rules are true and true for `.read ` and `.write` at Firebase website
```js
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

2. Use ref, push functions. Create the referenceInDB(database,"name")
```js 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"
import { getDatabase,
         ref,
         push } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://birthday-app-75b25-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "birthdays") // reference

const birthdayInputField = document.getElementById("birthday-input")
const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", function() {
    push(referenceInDB, birthdayInputField.value) // push(ref,value)
    birthdayInputField.value = ""
})

```

## To fetch a value from Firebase: 

```js
onValue(referenceInDB, function(snapshot) {
    console.log(snapshot)
})
```

## Turn objects into arrays: 
```js
const loginCredentials = {
    "rafidhoda": "BestPassword123",
    "shahrukhkhan": "InBigCitiesSmallThingsHappen",
    "jackblack": "ThisIsNotTheGreatestPasswordInTheWorld"
}

console.log(Object.values(loginCredentials))
```

## Deleting all data using remove:
```js
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) { // if snapshot exist, then and only
    // then you can run the code below, we need this code because
    // if there's nothing on the list, the delete all button will have 
    // an error
        const snapshotValues = snapshot.val()
        const chores = Object.values(snapshotValues)
        render(chores)
    } 
})

deleteAllButtonEl.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ""
})

```