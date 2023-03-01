import { combineReducers } from "redux";
import { reducer as toDosReducer, ToDosState } from "./toDos/reducer";

export interface GlobalAppState {
  toDos: ToDosState;
}

export const rootReducer = combineReducers<GlobalAppState>({
  toDos: toDosReducer
});
