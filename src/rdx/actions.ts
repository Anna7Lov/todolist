import { ActionType } from "typesafe-actions";
import * as toDosActions from "./toDos/actions";

const allActions = {
  toDosActions
};

export type GlobalAppActions = ActionType<typeof allActions>;
