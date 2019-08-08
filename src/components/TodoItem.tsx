import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { TodoItemType } from 'types';

type Props = {
  todoItem: TodoItemType;
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
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '120px',
    },
    todoText: {
      flexGrow: 1,
    },
  })
);

export const TodoItem = ({ todoItem, deleteTodoItemStart }: Props) => {
  const [isEditing, setEditing] = useState(false);
  const classes = useStyles();

  const toggleEditing = () => setEditing(!isEditing);
  const onChangeTodoText = () => {};

  const errors = '';

  return (
    <Paper className={classes.paper} elevation={3}>
      {isEditing ? (
        <>
          <TextField
            autoFocus
            margin='dense'
            label='Todo text'
            type='text'
            fullWidth
            value={todoItem.todoText}
            onChange={onChangeTodoText}
            error={Boolean(errors)}
            helperText={errors}
          />
          <div className={classes.delete}>
            <Fab
              aria-label='delete'
              size='small'
              onClick={() => deleteTodoItemStart(todoItem.id)}
            >
              <DeleteIcon color='action' />
            </Fab>
            <Fab aria-label='cancel' size='small' onClick={toggleEditing}>
              <CancelIcon color='secondary' />
            </Fab>
          </div>
        </>
      ) : (
        <>
          <Typography className={classes.todoText}>{todoItem.todoText}</Typography>
          <Fab aria-label='edit' size='small' onClick={toggleEditing}>
            <EditIcon color='action' />
          </Fab>
        </>
      )}
    </Paper>
  );
};
