import ListGroup from "react-bootstrap/ListGroup";

const Todolist = ({ el }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>{el.name}</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Todolist;
