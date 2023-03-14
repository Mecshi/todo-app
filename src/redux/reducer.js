import { ADD_IMPORTANT, DELETE_IMPORTANT } from './actions-types'

const initialState = {
  toDoImportant: []
}
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_IMPORTANT:
      return ({
        ...state,
        toDoImportant: [...state.toDoImportant, payload]
      })
    case DELETE_IMPORTANT:
      return ({
        ...state,
        toDoImportant: state.toDoImportant.filter((toDo) => toDo.id !== payload)
      })
    default:
      return state
  }
}

export default rootReducer
