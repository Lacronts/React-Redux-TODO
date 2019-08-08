import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { TodoList } from 'components/TodoList';
import { TodoItem } from 'components/TodoItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { TodosState, TodoItemType } from 'types';

type Props = {
  todos: TodosState;
  clearAlerts(): void;
  addItemStart(todoText: string): void;
  fetchTodosStart(): void;
  deleteTodoItemStart(id: string): void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
    delete: {
      cursor: 'pointer',
    },
    todoText: {
      fontStyle: 'italic',
      flexGrow: 1,
    },
  })
);

export const Todo = (props: Props) => {
  const classes = useStyles();
  useEffect(() => {
    props.fetchTodosStart();
  }, []);
  const todos = props.todos.todoList.items;
  return (
    <TodoList
      addItemStart={props.addItemStart}
      addingProcess={props.todos.addingProcess}
      deletingProcess={props.todos.deletingProcess}
      clearAlerts={props.clearAlerts}
    >
      {todos.length > 0 ? (
        todos.map((el: TodoItemType) => (
          <TodoItem
            todoItem={el}
            key={el.id}
            deleteTodoItemStart={props.deleteTodoItemStart}
          />
        ))
      ) : (
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.todoText} align='center' variant='overline'>
            Сlick button to add new TODO
          </Typography>
        </Paper>
      )}
    </TodoList>
  );
};
