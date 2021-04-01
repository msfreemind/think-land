import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import SideBarContainer from './sidebar/sidebar_container';

import EssayIndexContainer from './essays/essay_index_container';
import EssayDraftIndexContainer from './essays/draft_index_container';
import EssayShowContainer from './essays/essay_show_container';
import EssayNewContainer from './essays/essay_new_container';
import EssayEditContainer from './essays/essay_edit_container';

import ReviewIndexContainer from './reviews/review_index_container';
import ReviewDraftIndexContainer from './reviews/draft_index_container';
import ReviewShowContainer from './reviews/review_show_container';
import ReviewNewContainer from './reviews/review_new_container';
import ReviewEditContainer from './reviews/review_edit_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import NotFound from './not_found'

const App = () => (
  <div>
    <NavBarContainer />

    <main className="main">
      <SideBarContainer />

      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <ProtectedRoute exact path="/reviews" component={ReviewIndexContainer} />
        <ProtectedRoute exact path="/reviews/drafts" component={ReviewDraftIndexContainer} />      

        <ProtectedRoute path="/essays/:essayId/reviews/new" component={ReviewNewContainer} /> 
        <ProtectedRoute path="/reviews/edit/:reviewId" component={ReviewEditContainer} /> 
        <ProtectedRoute path="/reviews/:reviewId" component={ReviewShowContainer} /> 

        <ProtectedRoute exact path="/essays" component={EssayIndexContainer} />
        <ProtectedRoute exact path="/essays/drafts" component={EssayDraftIndexContainer} />

        <ProtectedRoute exact path="/essays/new" component={EssayNewContainer} />
        <ProtectedRoute path="/essays/edit/:draftId" component={EssayEditContainer} />
        <ProtectedRoute path="/essays/:essayId" component={EssayShowContainer} />
        
        <Route component={NotFound} />   
      </Switch>
    </main>
  </div>
);

export default App;