let displayCount=document.getElementById('display-count')
let btnIncrement=document.querySelector('.btn-increment')
let previousEntry=document.getElementById('previous-entry')

let count=0
displayCount.textContent=count
btnIncrement.addEventListener('click',()=>{
    count=count+1
    // console.log(count)
    displayCount.textContent=count
})

function save(){
    // console.log(count)
    previousEntry.textContent+= `${count} - `
    displayCount.textContent = 0
    count = 0
}