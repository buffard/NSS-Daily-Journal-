
let container = document.querySelector(".entryLog")

const makeJournalEntryComponent = (journalEntry) => {
  return `
    <div id="journalEntry">
      <h1>${entry.concept}</h1>
      <h2>${entry.date}</h2>
      <p>${entry.entry}</p>
      <p>${entry.mood}</p>
    </div>
  `
}


