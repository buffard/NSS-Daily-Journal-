let container = document.querySelector(".entryLog")

const makeJournalEntryComponent = (entry) => {
  let strings = ""
  console.log(entry)
  entry.forEach((arrObj) => {
    strings += `
    <div id="journalEntry">
      <h2>${arrObj.date}</h2>
      <p>${arrObj.entry}</p>
      <p>${arrObj.mood}</p>
    </div>
  `
  
  })
  console.log("string return", strings)
  return strings
}