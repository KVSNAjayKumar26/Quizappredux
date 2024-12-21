import { createStore } from "redux";
import quizReducer from "./redux/reducers";


const store = createStore(quizReducer);

export default store;