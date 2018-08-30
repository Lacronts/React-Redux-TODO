export const CREATE = 'CREATE'
export const DELETE = 'DELETE'
export const TOOGLE = 'TOOGLE'
export const SAVE = 'SAVE'
export const EDIT = 'EDIT'
export const VIEW_ALL = 'VIEW_ALL'
export const VIEW_IS_NOT_COMPLETED = 'VIEW_IS_NOT_COMPLETED'

export function createTask(task) {
  return {
      type: CREATE,
      payload: task,
    }
}
export function deleteTask(id) {
  return {
      type: DELETE,
      payload: id,
    }
}
export function toogleTask(id) {
  return {
      type: TOOGLE,
      payload: id,
    }
}

export function saveTask(newTask, id) {
  return {
      type: SAVE,
      payload: {newTask, id}
    }
}

export function editTask(id) {
  return {
      type: EDIT,
      payload: id,
    }
}

export function viewAll() {
  return {
      type: VIEW_ALL,
    }
}

export function viewIsNotCompleted(id) {
  return {
      type: VIEW_IS_NOT_COMPLETED,
    }
}
