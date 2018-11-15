

function renderJournalEntries (parsedEntries) {
  parsedEntries.forEach((entry) => {
    container.innerHTML += makeJournalEntryComponent(entry)
  })
}

