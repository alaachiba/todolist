import Task from "./Tasks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/actions";


function Input() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <form>
          <input
            class="todo-inputs"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="enter task"
          />
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              const Change = {
                id: Math.random(),
                description: task,
                isDone: false,
              };
              dispatch(addTask(Change));
              setTask("");
            }}
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
