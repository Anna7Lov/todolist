import { createStore, Store } from "redux";
import { rootReducer, GlobalAppState } from "./rootReducer";

export const store: Store<GlobalAppState> = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
