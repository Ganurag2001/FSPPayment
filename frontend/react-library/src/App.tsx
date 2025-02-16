import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import HomePage from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import BookCheckoutPage from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';

const oktaAuth  = new OktaAuth(oktaConfig);
// const cors  = require("cors");

// app.use(cors());

export const App = () => {

  const customeAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginUri = async (_oktaAuth: any, originalUri: any) =>{
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginUri} onAuthRequired={customeAuthHandler}>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path={'/checkout/:bookId'}>
            <BookCheckoutPage/>
          </Route>
          <Route path='/login' render={() => <LoginWidget config={oktaConfig} /> } />
          <Route path='/login/callback' component={LoginCallback}/>
        </Switch>
      </div>
      <Footer />
      </Security>
    </div>
  );
}
