import React from "React"
import ReactDOM from "react-dom/client"

{
  /* <h1 id = "TESTTTT">"NAMASTE FROM REACT ITSELF !!!😃😃😀"</h1> */
}
const heading = React.createElement(
  "h1",
  {
    id: "TESTTTT",
  },
  "NAMASTE FROM REACT ITSELF HMR out of the box !!!😃😃😀"
)
{
  /* <h2 id = "TESTTTT">"NAMASTE FROM REACT ITSELF !!!😃😃😀"</h2> */
}
const heading2 = React.createElement(
  "h2",
  {
    key: 1,
  },
  "INSIDE SOMETHING --1"
)
const heading3 = React.createElement(
  "h3",
  {
    key: 2,
  },
  "INSIDE SOMETHING -- 2"
)

{
  /* <div id = "container">
  <h1 id = "TESTTTT">"NAMASTE FROM REACT ITSELF !!!😃😃😀"</h1>
  <h2 id = "TESTTTT">"NAMASTE FROM REACT ITSELF !!!😃😃😀"</h2> 
</div> */
}

const container = React.createElement(
  "div",
  {
    id: "container",
    samjhakya: "123",
  },
  [heading2, heading3]
)
// ReactDOM.something (we are using react DOM library >> modifies dom)
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(heading)
// Passing React element inside Root
// Render method takes in react element and modifies our dom

// Heading gets injected inside our root it overrides what is there inside root

root.render(heading)
