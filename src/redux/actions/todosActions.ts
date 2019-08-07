import { ADD_ITEM_FAIL, ADD_ITEM_FINISH, ADD_ITEM_START } from '../actionTypes';

export const addItemStart = (todoText: string) => ({
  type: ADD_ITEM_START,
  todoText,
});

export const addItemFail = (error: string) => ({
  type: ADD_ITEM_FAIL,
  error,
});

export const AddItemFinish = () => ({
  type: ADD_ITEM_FINISH,
});
