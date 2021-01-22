import React,{useState} from 'react';
import { useDispatch} from 'react-redux'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {logInUser} from '../../Services/userServices'
import {refresh} from '../../Services/userServices'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(http://localhost:3004/articles/images/article-1591146651634.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = {
  'userName':"",
  'pass':""
}
 
const SignIn = () => {

  const classes = useStyles();
  const [userState, setUserState] = useState(initialState)
  const dispatch = useDispatch() 


  const handleLogin = async(e)=>{
    e.preventDefault() 
      dispatch(
    logInUser(userState))
    setUserState(initialState)
    console.log("mmmm")
  }
console.log(userState)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            SIGN IN
          </Typography>
          <form onSubmit={(e) =>handleLogin(e)} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="userName"
              autoFocus
              value={userState.userName}
              onChange={(e)=>setUserState({...userState,[e.target.name]: e.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Password"
              type="password"
              id="password"
              value={userState.pass}
              onChange={(e)=>{
                setUserState({...userState,[e.target.name]: e.target.value})
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
            <button onClick={()=>refresh()}>
                testRefresh
            </button>
        </div>
      </Grid>
    </Grid>
  );
}
export default SignIn