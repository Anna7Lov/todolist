import { useState, useCallback } from "react";
import { ToDoModel } from "../../services/toDosTypes";
import { Modal } from "../Modal/Modal";
import "./ToDoItem.css";

interface ToDoItemProps {
  toDo: ToDoModel;
}

export const TodoItem = ({ toDo }: ToDoItemProps) => {
  const [toDoStatus, setToDoStatus] = useState<string>(toDo.status);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleToDoClick = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCheckboxChange = useCallback(() => {
    toDoStatus === "Open" ? setToDoStatus("Done") : setToDoStatus("Open");
  }, [toDoStatus]);

  const handleCheckboxClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <tr className="todo-item" onClick={handleToDoClick}>
        <td className="todo-item__data">{toDo.id}</td>
        <td className="todo-item__data">
          {toDo.title.length < 15
            ? toDo.title
            : `${toDo.title.substring(0, 12)}...`}
        </td>
        <td className="todo-item__data">
          {toDo.description.length < 25
            ? toDo.description
            : `${toDo.description.substring(0, 22)}...`}
        </td>
        <td className="todo-item__data">
          <input
            type="checkbox"
            checked={toDoStatus === "Done"}
            onChange={handleCheckboxChange}
            onClick={handleCheckboxClick}
          />
        </td>
      </tr>
      <tr className="todo-modal">
        <td>
          {isModalVisible ? (
            <Modal
              toDo={toDo}
              toDoStatus={toDoStatus}
              onCheckboxChange={handleCheckboxChange}
              onModalClose={closeModal}
            />
          ) : null}
        </td>
      </tr>
    </>
  );
};
