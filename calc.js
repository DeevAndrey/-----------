console.log('App is working')
out = document.getElementById('result')
document.querySelector('.Btns').onclick = ()=>{
    if (event.target.classList.contains('number')){
        out.value += event.target.textContent
    }
    if (event.target.classList.contains('operation')){
        let a = out.value
        out.value = out.value .slice(0,-1)
        console.log(a.slice(0,-1))
    }
}