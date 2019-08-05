import React, { useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { WithStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { isAuthenticated } from 'helpers/auth';

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
    message: {
      color: '#64dd17',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    progress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-12px',
      marginTop: '-6px',
    },
  });

interface Props extends WithStyles<typeof useStyles> {
  signUpProcess: any;
  signUpStart(name: string, email: string, password: string): void;
}

const SignUpComponent = ({ classes, signUpStart, signUpProcess }: Props) => {
  if (isAuthenticated()) {
    return <Redirect to='/' />;
  }

  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const trySignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signUpStart(formData.name, formData.email, formData.password);
  };

  const handleChangeInput = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: value });
  };

  const errors = signUpProcess.error && signUpProcess.error.details;

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
            autoFocus
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='name'
            label='Name'
            autoComplete='firstName'
            value={formData.name}
            onChange={handleChangeInput}
            error={!!errors.name}
            helperText={errors.name}
          />

          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Email Address'
            name='email'
            autoComplete='email'
            value={formData.email}
            onChange={handleChangeInput}
            error={!!errors.email}
            helperText={errors.email}
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
            error={!!errors.password}
            helperText={errors.password}
          />
          <Typography className={classes.message} align='center'>
            {signUpProcess.message}
          </Typography>
          <div className={classes.wrapper}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={trySignUp}
              disabled={signUpProcess.inProcess}
            >
              Sign Up
            </Button>
            {signUpProcess.inProcess && (
              <CircularProgress size={24} className={classes.progress} />
            )}
          </div>
          <Grid container>
            <Grid item xs />
            <Grid item>
              <Link to='/sign-in/' variant='body2' component={RouterLink}>
                {'Have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export const SignUp = withStyles(useStyles)(SignUpComponent);
