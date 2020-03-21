import {combineReducers, createStore} from "redux";
import reducerTodolist from "./reducerTodolist";
import reducerFooter from "./reducerFooter"

let reducers = combineReducers({
    reducerTodolist,
    reducerFooter
})

const store = createStore(reducers);

window.store = store;

export default store;