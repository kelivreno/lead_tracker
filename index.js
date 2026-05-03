let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    newInput = inputEl.value
    myLeads.push(newInput)
    console.log(myLeads)
})

let listItems = ""

// we prepare the listItems and afterwards, we render it so that the page doesn't 
// update every time there is a new link

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i]  + "</li>"
}



ulEl.innerHTML = listItems
