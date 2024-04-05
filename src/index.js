//1. Prevents page from refreshing whenever submit event happens
//2. 
const init = () => {
  const inputForm = document.querySelector("form")
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault()
    // could also use event.target.children[1].value, input is valid here because it is the first input found by query selector with that ID. could also querySelectorAll values into an array.
    const input = inputForm.querySelector("input#searchByID")
    console.log(input.value)
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then ((data) => {
        console.log(data)
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p")
        title.innerText = data.title
        summary.innerText = data.summary
    })
  })
}

//runs init function once DOM content has loaded
document.addEventListener('DOMContentLoaded', init);