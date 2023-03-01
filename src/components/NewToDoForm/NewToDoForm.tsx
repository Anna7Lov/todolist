import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToDos } from "../../rdx/toDos/actions";
import "./NewToDoForm.css";

interface ItemNewModel {
  title: string;
  description: string;
}

const initialItem: ItemNewModel = {
  title: "",
  description: "",
};

export const NewToDoForm = () => {
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState<ItemNewModel>(initialItem);
  const [newId, setNewId] = useState<string>("1");
  const [titleError, setTitleError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewToDo({
        ...newToDo,
        [e.target.name]: e.target.value
      });
    },
    [newToDo]
  );

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      if (newToDo.title && newToDo.description) {
        dispatch(
          addToDos({
            newToDo: {
              id: newId,
              title: newToDo.title,
              description: newToDo.description,
              status: "Open",
            }
          })
        );
        setNewId(+newId + 1 + "");
        setNewToDo(initialItem);
        setTitleError(false);
        setDescriptionError(false);
      } else {
        if (newToDo.title === "") {
          setTitleError(true);
        } else {
          setTitleError(false);
        }
        if (newToDo.description === "") {
          setDescriptionError(true);
        } else {
          setDescriptionError(false);
        }
      }
    },
    [dispatch, newToDo, newId]
  );  

  return (
    <form className="todo-form" onSubmit={handleFormSubmit}>
      <div className="todo-form__item">
        <label className="todo-form__label">
          Title:
          <input
            type="text"
            className={
              !titleError ? "todo-form__input" : "todo-form__input error"
            }
            name="title"
            value={newToDo.title}
            onChange={handleInputChange}
            placeholder="Enter title"
          />
        </label>
        {titleError ? <p className="todo-form__text-error">This field is empty</p> : null}
      </div>

      <div className="todo-form__item">
        <label className="todo-form__label">
          Description:
          <input
            className={
              !descriptionError ? "todo-form__input" : "todo-form__input error"
            }
            name="description"
            value={newToDo.description}
            onChange={handleInputChange}
            placeholder="Enter description"
          ></input>
        </label>
        {descriptionError ? (
          <p className="todo-form__text-error">This field is empty</p>
        ) : null}
      </div>

      <button className="todo-form__button" type="submit">
        Create
      </button>
    </form>
  );
};
