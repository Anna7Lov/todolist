import { useSelector } from "react-redux";
import { selectToDos } from "../../rdx/toDos/selectors";
import { NewToDoForm } from "../NewToDoForm/NewToDoForm";
import { TodoItem } from "../ToDoItem/ToDoItem";
import { tableHeaders } from "./constants";
import "./ToDoList.css";

export const ToDoList = () => {
  const toDos = useSelector(selectToDos);

  return (
    <div className="todo-list">
      <h1 className="todo-list__title">ToDo List</h1>
      <NewToDoForm />
      <table className="table">
        <thead className="table__head">
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.id} className="table__header">{header.title}</th>
            ))}            
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDo) => (
            <TodoItem toDo={toDo} key={toDo.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
