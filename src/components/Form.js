import React, { useState } from "react";

function Form(props) {
    // useState's only argument is the initial state of the variable
    // useState returns an array with two items: the current state value and a function that updates it
    const [name, setName] = useState("");

    // This function changes the value of the text input as the user types
    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name === "")
            return;
        props.addTask(name);
        // Clears the input field after the task is submitted
        setName("");
    }
    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button> 
      </form>
    );
}

export default Form;