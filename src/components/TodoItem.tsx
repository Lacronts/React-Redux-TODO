import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';
import DoneAll from '@material-ui/icons/DoneAllRounded';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { fullDateFormat } from 'helpers/date';

import { TodoItemType, DeletingProcess, EditingProcess } from 'types';

type Props = {
  todoItem: TodoItemType;
  deletingProcess: DeletingProcess;
  editingProcess: EditingProcess;
  deleteTodoItemStart(id: string): void;
  editTodoItemStart(todoId: string, todoText: string, status: string): void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
    delete: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90px',
      minWidth: '90px',
    },
    todoText: (props: TodoItemType) => ({
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      textDecoration: props.status == 'completed' ? 'line-through' : 'none',
      fontStyle: props.status === 'completed' ? 'italic' : 'normal',
      color: props.status === 'completed' ? '#9e9e9e' : '#424242',
    }),
    progress: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginTop: '-12px',
      marginLeft: '-12px',
    },
    progressWrapper: {
      position: 'absolute',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '4px',
    },
    successIco: {
      boxShadow: `0px 1px 3px -1px rgba(0,0,0,0.2), 
        0px 3px 5px 0px rgba(0,0,0,0.14), 
        0px 1px 3px 0px rgba(0,0,0,0.12)`,
      backgroundColor: 'transparent',
      border: '3px solid #43a047',
    },
    doneAll: {
      color: '#43a047',
    },
    createdAt: {
      position: 'absolute',
      bottom: '0',
      left: theme.spacing(8),
      padding: `0 ${theme.spacing(1)}px`,
      backgroundColor: '#e0e0e0',
      borderTopRightRadius: '4px',
      borderTopLeftRadius: '4px',
      fontStyle: 'italic',
      fontSize: '10px',
    },
  })
);

export const TodoItem = ({
  todoItem,
  deleteTodoItemStart,
  editTodoItemStart,
  editingProcess,
  deletingProcess,
}: Props) => {
  const [isEditing, setEditing] = useState(false);
  const [todoText, setTodoText] = useState(todoItem.todoText);
  const [isCurrent, setCurrent] = useState(false);
  const classes = useStyles(todoItem);

  const toggleEditing = () => setEditing(!isEditing);
  const onChangeTodoText = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(value);
  const saveChanges = () => {
    setCurrent(true);
    setEditing(false);
    editTodoItemStart(todoItem.id, todoText, todoItem.status);
  };
  const deleteItem = () => {
    setCurrent(true);
    deleteTodoItemStart(todoItem.id);
  };
  const toggleStatus = () => {
    setCurrent(true);
    editTodoItemStart(
      todoItem.id,
      todoText,
      todoItem.status === 'completed' ? 'active' : 'completed'
    );
  };

  useEffect(() => {
    if (!editingProcess.inProcess && !deletingProcess.inProcess) {
      setCurrent(false);
    }
  }, [editingProcess.inProcess, deletingProcess.inProcess]);

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
            value={todoText}
            onChange={onChangeTodoText}
            error={Boolean(errors)}
            helperText={errors}
          />
          <div className={classes.delete}>
            <Fab aria-label='save' size='small' onClick={saveChanges}>
              <DoneIcon />
            </Fab>
            <Fab aria-label='cancel' size='small' onClick={toggleEditing}>
              <CancelIcon color='action' />
            </Fab>
          </div>
        </>
      ) : (
        <>
          <Fab
            aria-label='status toggle'
            size='small'
            className={classes.successIco}
            onClick={toggleStatus}
          >
            {todoItem.status === 'completed' && <DoneAll className={classes.doneAll} />}
          </Fab>
          <Typography className={classes.todoText}>{todoItem.todoText}</Typography>
          <div className={classes.delete}>
            <Fab aria-label='edit' size='small' onClick={toggleEditing}>
              <EditIcon color='action' />
            </Fab>
            <Fab aria-label='delete' size='small' onClick={deleteItem}>
              <DeleteIcon color='action' />
            </Fab>
          </div>
        </>
      )}
      {(editingProcess.inProcess || deletingProcess.inProcess) && isCurrent && (
        <div className={classes.progressWrapper}>
          <CircularProgress size={24} className={classes.progress} />
        </div>
      )}
      <div className={classes.createdAt}>
        {todoItem.updatedAt
          ? `Updatet at: ${fullDateFormat(todoItem.updatedAt)}`
          : ` Created at: ${fullDateFormat(todoItem.createdAt)}`}
      </div>
    </Paper>
  );
};
