import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { AddItemDialog } from 'components/AddItemDialog';

import { AddingProcess, DeletingProcess } from 'types';

type Props = {
  deletingProcess: DeletingProcess;
  addingProcess: AddingProcess;
  children: React.ReactNode;
  addItemStart(todoText: string): void;
  clearAlerts(): void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      display: 'flex',
      marginLeft: 'auto',
      padding: theme.spacing(2),
      marginTop: theme.spacing(1),
      boxShadow: '0 0 0 10px rgba(0,0,0,0)',
      animation: `$pulsate 1000ms infinite`,
    },
    errorPaper: {
      backgroundColor: theme.palette.secondary.main,
    },
    errorText: {
      marginTop: theme.spacing(1),
    },
    '@keyframes pulsate': {
      '0%': {
        boxShadow: '0 0 0 0  rgba(0, 0, 0, 0.2)',
      },
      '100%': {
        transform: 'box-shadow: 0 0 0 10px rgba(0, 0, 0, 0)',
      },
    },
  })
);

export const TodoList = ({
  children,
  addItemStart,
  addingProcess,
  clearAlerts,
  deletingProcess,
}: Props) => {
  const [dialogIsOpened, toggleDialog] = useState(false);
  const [todoText, setText] = useState<string>('');
  const classes = useStyles();

  useEffect(() => {
    if (!addingProcess.inProcess && !addingProcess.error && dialogIsOpened) {
      closeDialog();
    }
  }, [addingProcess.inProcess]);

  const addTodo = () => {
    addItemStart(todoText);
  };

  const closeDialog = () => {
    setText('');
    clearAlerts();
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
      <Paper className={classes.errorPaper}>
        <Typography color='textSecondary' align='center' className={classes.errorText}>
          {deletingProcess.error && deletingProcess.error.details.id}
        </Typography>
      </Paper>
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
        addingProcess={addingProcess}
      />
    </Container>
  );
};
