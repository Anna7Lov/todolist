import { getType } from "typesafe-actions";
import { ToDoModel } from "../../services/toDosTypes";
import { GlobalAppActions } from "../actions";
import { addToDos } from "./actions";

export interface ToDosState {
  list: ToDoModel[];
}

const initialState: ToDosState = {
  list: [],
};

export const reducer = (
  state = initialState,
  action: GlobalAppActions
): ToDosState => {
  switch (action.type) {
    case getType(addToDos): {
      return {
        ...state,
        list: [...state.list, action.payload.newToDo]
      };
    }

    default: {
      return state;
    }
  }
};
