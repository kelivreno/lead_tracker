let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    newInput = inputEl.value
    myLeads.push(newInput)
    console.log(myLeads)
})
