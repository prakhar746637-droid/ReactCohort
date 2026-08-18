/*
console.log(React) 
------------------------------------------------------------------

##. dom se andar tag banana
let h1 = document.createElement("h1");
h1.textContent = "Hello i am dom"
document.body.append(h1)
console.log("real dom", h1)

##. react se andar tag banana
let rh1 = React.createElement("h1", null, "Hello i am React")
let root = document.querySelector("#root")
ReactDOM.createRoot(root).render(rh1)
console.log("vertual dom", rh1)
-------------------------------------------------------------------------
*/