import React,{useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useDispatch} from 'react-redux'

import {getArticles} from './Services/articleRestServices'

import Nav from './Containers/mainNav'
import Home from './Containers/home'
import Footer from './Containers/footer'
import ArticleShowPage from './Components/articleShowPage';
import SignIn from './Components/AdminComponents/signIn'
import ErrorPage from './Components/errorPage';
import PrivacyPolicy from './Components/privacyPolicy'

import newArticleForm from './Components/newArticleForm'
import Dashboard from './Components/AdminComponents/dashBoard';
import './App.css';

library.add(fab, faBars)

function App() {
  const dispatch = useDispatch() 
  useEffect(() => {
      dispatch(getArticles())
  }, [dispatch])
  const check = false

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
            <Route exact path="/admin" component={SignIn} />
            <Route exact path="/dash/create-article" component={newArticleForm} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </div>
      <Footer/>
    </div>
  );
}

export default App;