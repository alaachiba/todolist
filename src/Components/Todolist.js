import { useSelector } from "react-redux";
import ListCard from "./ListCard";

const Todolist = () => {
    const tasks = useSelector((state) => state.data);
    console.log("aflem",tasks)
    return (
        <div style={{ display: 'flex', flexWrap:'wrap', flexDirection: 'column', justifyContent: 'space-between' }}>
        {
            tasks.map((el) => (
                <ListCard el={el} />
        ))}
        </div>
    )
}

export default Todolist