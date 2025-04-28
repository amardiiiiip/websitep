let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')
 
 const enablelightmode=()=>{
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
 }

 const disablelightmode =()=>{
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode',null)
 }

themeSwitch.addEventListener("click",()=>{
lightmode !=="active" ? enablelightmode():disablelightmode()
})