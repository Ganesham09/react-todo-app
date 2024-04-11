import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handeleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row gp-row">
        <div className="col-6">
          <input
            type="`text`"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handeleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success gp-button"
            onClick={handleAddButtonClicked}
          >
            <MdOutlineAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
