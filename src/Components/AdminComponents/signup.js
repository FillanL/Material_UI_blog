import React,{useState} from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {createUser} from '../../Services/userServices'

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
  error:{
      color: 'red'
  }
}));

const initialState = {
  'userName':"",
  'pass':""
}
const matchPasswordInitalState = {
  "password":""
}
// const errorInit ={
//   "responseError":null,
// }
 
const Signup = () => {

    const dispatch = useDispatch() 
    const history = useHistory();
    const classes = useStyles();
    const [error, setError] = useState({})
    const [userState, setUserState] = useState(initialState)
    const [matchPassword, setMatchPasswordState] = useState(matchPasswordInitalState)

  const handleCreaterUser= async(e) =>{
    e.preventDefault() 
    setError({})
    // const hasNoErrors = false

    if(userState.pass.length >= 5 && userState.userName.length >= 5 && matchPassword.password.length >= 5){
        if(matchPassword.password === userState.pass){
          let response = await dispatch(createUser(userState))
          setUserState(initialState)
          setMatchPasswordState(matchPasswordInitalState)
          console.log(response, "wait")
          if(response.status === 200) {
            setError({"message":"account successful created"})
            history.push("/admin/login")
          }
          if(response.status === 400) setError({"responseError": response.data.message})

        }else{
            console.log(matchPassword.password, userState.pass)
            setError({"matchError":"passwords do not match"})
            setUserState({...userState,"pass":""})
            setMatchPasswordState({"password":""})
        }
    }
    else if(userState.pass.length === 0 && userState.userName.length === 0 && matchPassword.password.length === 0) return setError({"inputError":"input field cannot be blank"})
    else return setError({...error,"inputError":"need to be atleast length of 5 /n check inputs"})
  }
console.log(userState, error)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            SIGN UP
          </Typography>
          {error.inputError ? <p className={classes.error}>{error.inputError}</p> : null}
          {error.responseError ? <p className={classes.error}>{error.responseError}</p>:null}
          {error.message ? <p className={""}>{error.message}</p>:null}
          <form onSubmit={(e) =>handleCreaterUser(e)} className={classes.form} noValidate>
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
            {error.matchError ? <p className={classes.error}>{error.matchError}</p> : null}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="pass"
              label="password"
              type="password"
              id="password"
              // inputProps={{ pattern: "[a-zA-Z1-9]" }}
              value={userState.pass}
              onChange={(e)=>{
                setUserState({...userState,[e.target.name]: e.target.value})
                }}
              />
            {error.matchError ? <p className={classes.error}>{error.matchError}</p> : null}
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="re-password"
                type="password"
                id="re-password"
                value={matchPassword.password}
                onChange={(e)=>{
                    setMatchPasswordState({...userState,[e.target.name]: e.target.value})
                }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // disabled={match}
              >
              Sign up
            </Button>
          </form>
          {/* <a href="http://localhost:3005/google/">click me</a> */}
          <Grid container>
              <Grid item>
                <Link href="/admin/login" variant="body2">
                  {"already have an account?"}
                </Link>
              </Grid>
            </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
export default Signup