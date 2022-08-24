document.addEventListener("DOMContentLoaded", () => {
  // your code here
 //console.log('After dom loaded')
 //user should be able to click a submit button
 document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
addInputText(e.target.new_todo.value);

 })
})
function addInputText(txt){
  const p = document.createElement('p')
  p.textContent =`${txt}   `
  const btn=document.createElement('button')
  btn.addEventListener('click',deleteTask())
  btn.textContent='X'
  p.appendChild(btn);
document.querySelector("#tasks").appendChild(p)

}

function deleteTask(task){
  addEventListener('click',function(e){
    e.target.parentNode.remove()
  })
  }


 

