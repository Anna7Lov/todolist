import { GlobalAppState } from "../rootReducer";

export const selectToDos = (state: GlobalAppState) => state.toDos.list;
