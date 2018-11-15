/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

 API.getJournalEntries().then(data => makeJournalEntryComponent(data))

//this is a click event that runs a function once clicked
const saveJournal = () => {
  document.querySelector("#input").addEventListener("click", (evt) => {
      const entry = {
          date: document.querySelector("#journalDate").value,
          concepts: document.querySelector("#conceptsCovered").value,
          journal: document.querySelector("#journalEntry").value,
          mood: document.querySelector("#mood").value
      }
      saveEntry: (entry) => {
        return fetch("http://localhost:8088/entries", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        }).then(res => res.json());
    }
})