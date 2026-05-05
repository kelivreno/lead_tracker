let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    // newInput = inputEl.value
    myLeads.push(inputEl.value)
    ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    inputEl.value = "" //clear the input field
    // console.log(myLeads)
    // renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'> 
                    ${myLeads[i]} 
                </a>
            </li>
        `
        // ${myLeads[i]} to add variables in the call
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
