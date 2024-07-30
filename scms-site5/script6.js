// const scriptURL = "https://docs.google.com/spreadsheets/d/1oOghIz22_pu7dNhOf360uxx0xyJ0iS114V8mF720oT4/edit#gid=0" 

// const form = document.forms['google-sheet']

// form.addEventListener ('submit', e => {
//     e.preventDefault()
//     fetch (scriptURL, {method: 'POST', body: new FormData (form)})
//     .then(response => alert("Thanks for Voting....!!!"))
//     .catch(error => console.error('Error!', error.message))
// })

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  )
  .then(response => alert("Thanks for Voting....!!!"))
  
  .catch(error => console.error('Error!', error.message))

  
});



    //  .then((html) => {
    //     // you can put any JS code here
    //     window.open('page2.html', '_blank');