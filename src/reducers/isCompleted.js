import { VIEW_ALL, VIEW_IS_NOT_COMPLETED} from '../actions/Actions'

const initialState = {
  isNotCompleted: false
}

export function viewReducer(state = initialState, action) {

  switch (action.type) {
    case VIEW_ALL:
      return {isNotCompleted: false}
    case VIEW_IS_NOT_COMPLETED:
        return {isNotCompleted: true}
    default:
      return state
  }
}
