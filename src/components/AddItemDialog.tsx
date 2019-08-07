import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import green from '@material-ui/core/colors/green';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
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
  })
);

export const AddItemDialog = ({
  open,
  onCloseFunc,
  onSuccessFunc,
  onChangeTodoText,
  todoText,
}: Props) => {
  const classes = useStyle();

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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseFunc} color='secondary' variant='outlined'>
          Cancel
        </Button>
        <Button onClick={onSuccessFunc} className={classes.addButton} variant='outlined'>
          Add TODO
        </Button>
      </DialogActions>
    </Dialog>
  );
};
