let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    newInput = inputEl.value
    myLeads.push(newInput)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i]  + "</li>"
    // create element
    const li = document.createElement("li")
    // set text content
    li.textContent = myLeads[i]
    // append to ulEl
    ulEl.append(li)
}

