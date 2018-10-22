const journalEntries = [
  {
    concept: "Array methods",
    date: "07/24/2018",
    entry: "We learned about array methods, but only forEach made sense",
    mood: "Ok"
  },
  {
    concept: "Do I Work",
    date: "10/22/2018",
    entry: "I just want this to work, then I'll understand",
    mood: "Happy"
  }
]

/*
  Purpose: To create, and return, a string template that
  represents a single journal entry object as HTML

  Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
    <div id="journalEntry">
      <h1>${journalEntry.concept}</h1>
      <h2>${journalEntry.date}</h2>
      <p>${journalEntry.entry}</p>
      <p>${journalEntry.mood}</p>
    </div>
  `
}

// /*
//     Purpose: To render all journal entries to the DOM
//     Arguments: entries (array of objects)
// */

const renderJournalEntries = (entries) => {
  journalEntries.forEach((a) => {
    document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(a)
  })
}

// Invoke the render function
renderJournalEntries(journalEntries)