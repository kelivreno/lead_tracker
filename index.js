let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    // newInput = inputEl.value
    myLeads.push(inputEl.value)
    inputEl.value = "" //clear the input field
    // console.log(myLeads)
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    // we prepare the listItems and afterwards, we render it so that the page doesn't 
    // update every time there is a new link
    // Alternative solution:
    // let listItem = "<li>" + inputEl.value + "</li>"
    // ulEl.innerHTML += listItem

    // for (let i = 0; i < myLeads.length; i++) {
    //     listItems += "<li>" + myLeads[i]  + "</li>"
    //     // console.log(listItems)
    // }
    let listItem = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML = listItem
}
