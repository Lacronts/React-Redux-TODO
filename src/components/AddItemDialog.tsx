import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { AddingProcess } from 'types';

type Props = {
  addingProcess: AddingProcess;
  open: boolean;
  todoText: string;
  onChangeTodoText(event: React.ChangeEvent): void;
  onCloseFunc(): void;
  onSuccessFunc(): void;
};

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      minWidth: '400px',
    },
    addButton: {
      color: green[400],
    },
    buttonWrapper: {
      position: 'relative',
    },
    progress: {
      position: 'absolute',
      left: '50%',
      marginLeft: '-12px',
      marginTop: '6px',
    },
  })
);

export const AddItemDialog = ({
  open,
  onCloseFunc,
  onSuccessFunc,
  onChangeTodoText,
  todoText,
  addingProcess,
}: Props) => {
  const classes = useStyle();

  const errors = addingProcess.error;

  return (
    <Dialog
      open={open}
      onClose={onCloseFunc}
      aria-labelledby='form-dialog-title'
      maxWidth='sm'
    >
      <DialogTitle id='form-dialog-title'>Add new TODO item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Todo text'
          type='text'
          fullWidth
          className={classes.field}
          value={todoText}
          onChange={onChangeTodoText}
          error={Boolean(errors)}
          helperText={errors && errors.details.todoText}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCloseFunc}
          color='secondary'
          variant='outlined'
          disabled={addingProcess.inProcess}
        >
          Cancel
        </Button>
        <div className={classes.buttonWrapper}>
          <Button
            onClick={onSuccessFunc}
            className={classes.addButton}
            variant='outlined'
            disabled={addingProcess.inProcess}
          >
            Add TODO
          </Button>
          {addingProcess.inProcess && (
            <CircularProgress size={24} className={classes.progress} />
          )}
        </div>
      </DialogActions>
    </Dialog>
  );
};
