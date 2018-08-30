import { CREATE, DELETE, TOOGLE, SAVE, EDIT } from '../actions/Actions'

const initialState = []

export function CEDReducer(state = initialState, action) {
  let maxId = state.reduce((accumulator, currenValue)=> {
    if  (accumulator > currenValue.id){
      return accumulator
    } else {
      return currenValue.id
    }
  },0)
  switch (action.type) {
    case CREATE:
      return [...state, {id: ++maxId, task:action.payload, isDone:false, isEditing: false}]
    case SAVE:
      return state.map((item) => {
      if (item.id === parseInt(action.payload.id,10)) {
        item.task = action.payload.newTask
        item.isEditing = false
      }
      return item
      })
    case DELETE:
      return state.filter((item) => {return item.id!==action.payload})
    case TOOGLE:
      return state.map((item) => {
        if (item.id === action.payload) item.isDone=!item.isDone
        return item
      })
    case EDIT:
      return state.map((item) => {
      if (item.id === action.payload) item.isEditing = true
      return item
      })
    default:
      return state
  }
}
