import React from "react"
import SingleToDo from "./components/singleToDo";

import './app.css'
const App=(props)=>{
return (
   <><h1>2022 Fall to-dos</h1>
   <SingleToDo todos={props.todos}/>
   </>
)
}
export default App