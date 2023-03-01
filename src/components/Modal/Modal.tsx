import { ToDoModel } from "../../services/toDosTypes";
import "./Modal.css";

interface ModalProps {
  toDo: ToDoModel;
  toDoStatus: string;
  onCheckboxChange: () => void;
  onModalClose: () => void;
}

export const Modal = ({
  toDo,
  toDoStatus,
  onCheckboxChange,
  onModalClose,
}: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__window">
        <h1 className="modal__title">{toDo.title}</h1>
        <h2>Description:</h2>
        <p>{toDo.description}</p>
        <div className="modal__status">
          <span>Status:</span>
          <input
            type="checkbox"
            className="modal__checkbox"
            checked={toDoStatus === "Done"}
            onChange={onCheckboxChange}
          />
        </div>
        <button type="button" className="modal__button" onClick={onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};
