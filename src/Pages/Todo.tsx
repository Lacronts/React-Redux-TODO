import React from 'react';
import { TodoList } from 'components/TodoList';
import { TodoItem } from 'components/TodoItem';

type Props = {
  todos: any;
  addItemStart(todoText: string): void;
};

export const Todo = (props: Props) => (
  <TodoList addItemStart={props.addItemStart}>
    <TodoItem />
  </TodoList>
);
