
document.addEventListener("DOMContentLoaded",()=>{
    let count=0
    const button=document.createElement("button")
    button.innerText="Change Title (Vanilla JS)"
    document.getElementById("container").appendChild(button)
    const p=document.createElement("p")
        p.innerText=`Count : 0`
        document.getElementById("container").appendChild(p)
    button.addEventListener("click",()=>{
        count++
        document.title="Changed using Vanilla"+count
        p.innerText=`Changer using Vanila : ${count} times`
        })
})