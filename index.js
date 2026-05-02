let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    new_input = inputEl.value
    myLeads.push(new_input)
    console.log(new_input)
})
