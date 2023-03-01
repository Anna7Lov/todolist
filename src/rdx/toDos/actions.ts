import { createAction } from "typesafe-actions";
import { ToDoModel } from "../../services/toDosTypes";

export enum ToDosActions {
  ADD_TODOS = "@toDos/ADD_TODOS"
}

export const addToDos = createAction(
  ToDosActions.ADD_TODOS,
  ({ newToDo }: { newToDo: ToDoModel }) => ({
    newToDo
  })
)();
