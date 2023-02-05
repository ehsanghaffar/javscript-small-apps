
let s = ''
document.querySelectorAll('[id]').forEach(el => {
  let {id} = el
  let name = id.replace(/-(.)/g, (_, c) => c.toUpperCase())
  s += `const $${name} = document.getElementById('${id}')\n`
})
console.log(s)


let $refs = {}
document.querySelectorAll('[id]').forEach($el => {
  let key = $el.id.replace(/-(.)/g, (_, s) => s.toUpperCase())
  $refs[key] = $el
})

console.log($refs)