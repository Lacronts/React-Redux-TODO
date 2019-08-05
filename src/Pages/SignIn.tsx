import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { WithStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = (theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(8),
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

interface Props extends WithStyles<typeof useStyles> {
  signInProcess: any;
  signInStart(email: string, password: string): void;
}

const SignInComponent = ({ classes, signInProcess, signInStart }: Props) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const trySignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInStart(formData.email, formData.password);
  };

  const handleChangeInput = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={formData.email}
            onChange={handleChangeInput}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            value={formData.password}
            onChange={handleChangeInput}
          />
          <Typography color='error' align='center'>
            {signInProcess.error}
          </Typography>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={trySignIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs />
            <Grid item>
              <Link to='/sign-up/' variant='body2' component={RouterLink}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export const SignIn = withStyles(useStyles)(SignInComponent);
