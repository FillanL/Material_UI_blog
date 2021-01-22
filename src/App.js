import React,{useEffect, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useDispatch} from 'react-redux'

import {getArticles} from './Services/articleRestServices'
// import { refresh } from './Services/userServices'

import Nav from './Containers/mainNav'
import Home from './Containers/home'
import ArticleShowPage from './Components/articleShowPage';
import SignIn from './Components/AdminComponents/signIn'
import ErrorPage from './Components/errorPage';
import PrivacyPolicy from './Components/privacyPolicy'

import newArticleForm from './Components/newArticleForm'
import Dashboard from './Components/AdminComponents/dashBoard';
import './App.css';
import Signup from './Components/AdminComponents/signup';
const Footer = React.lazy(() => import('./Containers/footer'))

library.add(fab, faBars)

function App() {
  const dispatch = useDispatch() 
  useEffect(() => {
      dispatch(getArticles())
      // refresh()
      // console.log("hello called")
  }, [dispatch])
  const check = true

//   useEffect(() => {
//     console.log("asdn munt")
// }, [])

  return (
    <div className="App">
      <Nav/>
        <div className="appContainer">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/article/:id" component={ArticleShowPage} />
            {check ?
              <Route exact path="/dash" component={Dashboard} /> 
              : null
            }
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dash/create-article" component={newArticleForm} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <OtherComponent /> */}
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;