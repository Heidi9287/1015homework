import React from 'react';
import"../app.css"
const SingleToDo = (props) => {
  const completed=()=>{const collection =document.getElementsByClassName('todo')
for(let i=0;i<collection.length;i++){if(collection[i].value===1){
 collection[i].style.display='none'
}}}
const active=()=>{const collection =document.getElementsByClassName('todo')
for(let i=0;i<collection.length;i++){if(collection[i].value===0){
 collection[i].style.display='none'
}
if(collection[i].value===1){collection[i].style='display:'}
}}
const all=()=>{const collection =document.getElementsByClassName('todo')
for(let i=0;i<collection.length;i++){collection[i].style.display=""}
}
    return (
      <> <ul id='list'>
        {props.todos.map((todo) => {const handleChange=(event)=>{if(event.target.checked)
        {document.getElementById(todo.id).style='text-decoration-line:line-through; color:grey';document.getElementById(todo.id).value='0'}
else
{document.getElementById(todo.id).style='null';document.getElementById(todo.id).value='1'}}
          return (<><li className='todo' id={todo.id} key={todo.id} value='1'><input type='checkbox' onClick={handleChange}/>{todo.todoName} </li>
          </>
          )
        })}</ul>
      <div id='button'>
      <button onClick={completed}>Completed</button>
    <button onClick={active}>Active</button>
    <button onClick={all}>All</button>
    </div>
      </>
    );
  };

  export default SingleToDo