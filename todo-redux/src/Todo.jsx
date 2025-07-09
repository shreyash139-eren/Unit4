import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DELETE, UPDATE_FORM } from "./action";

const Todo = () => {
  const todo = useSelector((state) => state.todo);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(UPDATE_FORM({ [name]: value })); 
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.title.trim()) {
      dispatch(ADD(form));
    }
  }

  const handleDelete = (id) => {
    dispatch(DELETE(id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
