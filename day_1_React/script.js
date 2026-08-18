//console.log(React)

let root = document.querySelector("#root")
const h1 = React.createElement("h1",{},"Hello this is from react")
ReactDOM.createRoot(root).render(h1)