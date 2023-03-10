import { ADD_IMPORTANT, DELETE_IMPORTANT } from './actions-types'

export const addImportant = (toDo) => {
  return ({
    type: ADD_IMPORTANT,
    payload: toDo
  })
}

export const deleteImportant = (id) => {
  return ({
    type: DELETE_IMPORTANT,
    payload: id
  })
}
