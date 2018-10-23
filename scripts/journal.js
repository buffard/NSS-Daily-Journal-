// Fetch from the API
fetch("http://localhost:3000/entries")
  .then(entries => entries.json())  // Parse as JSON
  .then(parsedEntries => {
    parsedEntries.forEach((entry) => {
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
      document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(parsedEntries)
    })
  })