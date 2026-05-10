let myLeads = []

// myLeads = JSON.stringify(myLeads) // we stringiy the array, so that the localstorage can read it
// otherwise, to convert a string to an array, use JSON.parse()
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage !== null) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/kelangithakim/"}
]

function arrLink(arr) {
    let kelLink = arr[0].url
    console.log(kelLink)
}

tabBtn.addEventListener("click", arrLink(tabs))

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
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    // newInput = inputEl.value
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // myLeads = JSON.stringify(myLeads)
    inputEl.value = "" //clear the input field
    
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
    // console.log(myLeads)
    // renderLeads()
})

// localStorage.setItem("myLeads", "www.example.com")
// let localStored = localStorage.getItem("myLeads")
// console.log(localStored)
// localStorage.clear()
// -||-.setItem(key, value)


