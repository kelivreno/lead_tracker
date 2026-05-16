// Import the functions needed from the firebase-app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"
// Web App's firebase configuration
const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL
}
// Initalize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

// console.log(firebaseConfig.databaseURL)

// let myLeads = []
// myLeads = JSON.stringify(myLeads) // we stringiy the array, so that the localstorage can read it
// otherwise, to convert a string to an array, use JSON.parse()
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'> 
                    ${leads[i]} 
                </a>
            </li>
        `
        // ${myLeads[i]} to add variables in the call and you need to use `` instead of "" or ''
    }
    ulEl.innerHTML = listItems  
    // we prepare the listItems and afterwards, we render it so that the page doesn't 
    // update every time there is a new link
    // Alternative solution:
    // let listItem = "<li>" + inputEl.value + "</li>"
    // ulEl.innerHTML += listItem

    // for (let i = 0; i < myLeads.length; i++) {
    //     listItems += "<li>" + myLeads[i]  + "</li>"
    //     // console.log(listItems)
    // }
    // let listItem = "<li>" + inputEl.value + "</li>"
    // ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function(){
    // localStorage.clear()
})

inputBtn.addEventListener("click", function() {
    // newInput = inputEl.value
    push(referenceInDB,inputEl.value)
    
    // myLeads = JSON.stringify(myLeads)
    inputEl.value = "" //clear the input field
    


    // console.log(localStorage.getItem("myLeads"))
    // console.log(myLeads)
    // renderLeads()
})

onValue(referenceInDB,function(snapshot){
    const snapshotValues = snapshot.val()
    const leads = Object.values(snapshotValues)
    render(leads)
})

// localStorage.setItem("myLeads", "www.example.com")
// let localStored = localStorage.getItem("myLeads")
// console.log(localStored)
// localStorage.clear()
// -||-.setItem(key, value)



