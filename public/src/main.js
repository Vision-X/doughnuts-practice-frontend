let button = document.getElementById('button')
let add = document.getElementById('append')

button.addEventListener('click', (e) => {
  add.innerText = ''
  fetch('https://whispering-dusk-24898.herokuapp.com/')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      let hele = document.createElement('h3')
      hele.innerText = item.type
      add.append(hele)
    })
  })
  .catch((err) => console.log(err))
})
