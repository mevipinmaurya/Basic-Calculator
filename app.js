let string = ""
let buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            try {
                string = eval(string)
                document.querySelector("input").value = string
            } catch (error) {
                // console.log("error")
                let msg = document.querySelector(".msg")
                msg.classList.remove("hide")
                let myInterval = setInterval(()=>{
                    msg.classList.add("hide")
                    stopMyInterval()
                }, 1000)
                const stopMyInterval = ()=>{
                    clearInterval(myInterval)
                }
                string = ""
                document.querySelector("input").value = string
            }
        }
        else if(e.target.innerHTML == "Clear"){
            string = ""
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML == "X"){
            string += "*"
            document.querySelector("input").value = string
        }
        else{
            console.log(button.innerText)
            string += e.target.innerHTML
            document.querySelector("input").value = string
        }
    })
})
