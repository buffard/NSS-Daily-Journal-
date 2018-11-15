
//API is holding our fetch call to json server
const API = {
  getJournalEntries () {
      return fetch("http://localhost:8088/entries")
          .then(response => response.json())
  }
}