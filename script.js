
let b1 = document.querySelector("#btn1")
let ul = document.querySelector("ul")
let ip = document.querySelector("input")

function addtask() {
  let item = document.createElement("li")
    item.innerText = ip.value

    let del = document.createElement("button")
    del.classList.add("delete")
    del.innerHTML = "Delete"

    if(ip.value.trim() === "") alert("Please Enter Valid Task");
    else{
    ul.appendChild(item)
    item.appendChild(del)
    ip.value =""
    }
    del.addEventListener("click",function(){
        item.remove()
    })
}

b1.addEventListener("click", addtask);

ip.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        addtask()
    }
})

let but = document.querySelector(".b")



let i=0

let body = document.querySelector("body")

function dm(){
    if(i%2==0){
        but.innerHTML = "DarkMode"
        body.style.backgroundColor = "black"
    }
    else{
        but.innerHTML = "Light Mode"
        body.style.backgroundColor = "White"
    }

    i++;
}

but.addEventListener("click",dm)
