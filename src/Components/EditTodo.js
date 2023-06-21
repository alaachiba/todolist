import React, { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { TextDecoration, editTask, deleteTask } from "../Redux/actions";


function EditTodo({ el }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(el.description);
  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(editTask({ id: el.id, input }));
    handleModal();
  };
  const deletee = () => {
    dispatch(deleteTask(el.id));
  };
  return (
    <div>
      <button onClick={handleModal}>Edit</button>
      <button onClick={deletee}>delete</button>
      <button onClick={() => dispatch(TextDecoration(el.id))}>
        {el.isDone ? "Undone" : "Done"}
      </button>
      <ReactModal isOpen={modalIsOpen}>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={handleModal}>close</button>
        <button onClick={edit}>submit</button>
      </ReactModal>
    </div>
  );
}

export default EditTodo;
