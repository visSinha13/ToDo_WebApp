import { useState } from "react";
import { DeleteBtn } from "./DeleteBtn";


export const Input = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInput(value);
  }
// handling add task
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");

    if (task.includes(input))
      return;

    if (!input) return;
    setTask((prevTask) => [...prevTask, input]);

  };

  //handling delete button/icon
  const handleDeleteClick = (value) => {
    const updatedTask = task.filter((currEle) => currEle !== value);
    setTask(updatedTask);
  }

  //handling clear all button
  const handleClearBtn=()=>{
    setTask([])
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="inputField"
          id="inputField"
          className="inputField"
          value={input}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button id="addBtn" className="addBtn">
          Add Task
        </button>
      </form>
      <section>
        <ul className="ul_list" id="Ul_list">
          {task.map((currEle, index) => {
            return (
              <li key={index} className="list" id="list">
                <span className="currEle" id="currEle">{currEle}</span>
                <span onClick={() => handleDeleteClick(currEle)}><DeleteBtn /></span>
              </li>
            )
          })}
        </ul>
        <button className="clearBtn" id="clearBtn" onClick={handleClearBtn}>Clear All</button>
      </section>

    </>
  );
};
