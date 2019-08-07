import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
  })
);

export const TodoItem = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      asd
    </Paper>
  );
};
