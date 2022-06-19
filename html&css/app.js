let navBtn = document.querySelector('#navButton')
let navigationBar = document.getElementById('navigationBar')
let navBar = document.getElementById('navBar')
let body = document.body
let navCloseBtn = document.getElementById('close-btn')

console.log(navCloseBtn)

navCloseBtn.addEventListener('click', () => {
  navigationBar.style.left = '-255px'
})

navBtn.onclick = () => {
  if (navigationBar.style.left === '0px') {
    navigationBar.style.left = '-250px'
  } else {
    navigationBar.style.left = '0px'
  }
}
