import { useSelector } from "react-redux";
import Todo from "./Todo";

const Tasks = () => {
  const Task = useSelector((state) => state.Tasks);

  return (
    <div>
      {Task.map((el) => (
        <Todo el={el} />
      ))}
    </div>
  );
};
export default Tasks;
