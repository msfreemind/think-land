import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';

import EssayIndexContainer from './essays/essay_index_container';
import EssayShowContainer from './essays/essay_show_container';
import EssayNewContainer from './essays/essay_new_container';
import EssayEditContainer from './essays/essay_edit_container';

import ReviewShowContainer from './reviews/review_show_container';
import ReviewNewContainer from './reviews/review_new_container';
import ReviewEditContainer from './reviews/review_edit_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/" component={EssayIndexContainer} />

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute path="/essays/:essayId/reviews/new" component={ReviewNewContainer} /> 
      <ProtectedRoute path="/reviews/edit/:reviewId" component={ReviewEditContainer} /> 
      <ProtectedRoute path="/reviews/:reviewId" component={ReviewShowContainer} /> 

      <ProtectedRoute exact path="/essays/new" component={EssayNewContainer} />
      <ProtectedRoute path="/essays/edit/:draftId" component={EssayEditContainer} />
      <ProtectedRoute path="/essays/:essayId" component={EssayShowContainer} />      
    </Switch>
  </div>
);

export default App;