
// get element from dom
const pwd = document.getElementById('pwd');

// create function for generate password 

const pwdGen = () => {
  // use created varible from dom element
  pwd.innerText =
  // use Math.random() method to generate random password string
  Math.random().toString(36).slice(2) + // use toString() method
  Math.random().toString(36)
      .toUpperCase().slice(2)
}
