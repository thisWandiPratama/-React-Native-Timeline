import { createStore } from "redux";
import { reducer } from './todoListRedux'

const store = createStore(reducer)

export default store