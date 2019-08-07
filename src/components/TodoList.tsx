import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { AddItemDialog } from 'components/AddItemDialog';

type Props = {
  addItemStart(todoText: string): void;
  children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      display: 'flex',
      marginLeft: 'auto',
      marginTop: theme.spacing(1),
    },
  })
);

export const TodoList = ({ children, addItemStart }: Props) => {
  const [dialogIsOpened, toggleDialog] = useState(false);
  const [todoText, setText] = useState<string>('');
  const classes = useStyles();

  const addTodo = () => {
    addItemStart(todoText);
  };

  const closeDialog = () => {
    toggleDialog(false);
  };

  const openDialog = () => {
    toggleDialog(true);
  };

  const onChangeTodoText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setText(value);
  };

  return (
    <Container maxWidth='md'>
      {children}
      <Fab
        color='secondary'
        aria-label='add'
        className={classes.addButton}
        onClick={openDialog}
      >
        <AddIcon />
      </Fab>
      <AddItemDialog
        open={dialogIsOpened}
        onCloseFunc={closeDialog}
        onSuccessFunc={addTodo}
        onChangeTodoText={onChangeTodoText}
        todoText={todoText}
      />
    </Container>
  );
};
