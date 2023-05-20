import React, { useState } from "react";
// A library that generates unique IDs
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  // The ?. operator functions means "if tasks exists on props then proceed 
  // with the map() operation. If tasks does not exist on props, it will return 
  // undefined and stop further execution, which prevents a TypeError of trying to 
  // access a property or method on undefined or null. 
  const taskList = tasks?.map((task) => 
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key={task.id} 
    />
  );

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* We pass the addTask function to the Form component as a prop */}
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
        </ul>
      </div> 
  )
}

export default App;
