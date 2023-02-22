import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer, RootState} from "./reducers";

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
// @ts-ignore
export const wrapper = createWrapper<MakeStore<RootState>>(makeStore, {debug: true});