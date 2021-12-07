function changeMode(){
  let btn = document.querySelector('#checkbox')
  let body = document.body
  btn.checked ? body.classList.add("darkmode") : body.classList.remove("darkmode")
}
