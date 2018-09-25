import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LoadQuizzesContainer from '../containers/LoadQuizzesContainer';
import CategoryFormContainer from '../containers/CategoryFormContainer';
import QuestionForm from './QuestionForm';
import TeamForm from './TeamForm';
import TeamDisplay from './TeamDisplay';
import BoardContainer from '../containers/BoardContainer';
import QuestionDisplay from './QuestionDisplay';
import HomeContainer from '../containers/HomeContainer';
import Navbar from './Navbar';
import LoginPageContainer from '../containers/LoginPageContainer';
import SignUp from './SignUp';
import QuizViewerContainer from '../containers/QuizViewerContainer';

import '../CSS/Game.css';

const RouterPage = (props) => {
  return (
    <Router>
      <div className='game'>
        <Navbar />
        <Route exact path={process.env.PUBLIC_URL + "/"} component={HomeContainer}/>
        <Route path={process.env.PUBLIC_URL + "/create"} component={CategoryFormContainer}/>
        <Route path={process.env.PUBLIC_URL + "/load"} component={LoadQuizzesContainer}/>
        <Route path={process.env.PUBLIC_URL + "/createquestions"} component={QuestionForm}/>
        <Route path={process.env.PUBLIC_URL + "/addteams"} component={TeamForm}/>
        <Route path={process.env.PUBLIC_URL + "/game"} component={TeamDisplay}/>
        <Route path={process.env.PUBLIC_URL + "/game/board"} component={BoardContainer}/>
        <Route path={process.env.PUBLIC_URL + "/game/question"} component={QuestionDisplay}/>
        <Route path={process.env.PUBLIC_URL + "/login"} component={LoginPageContainer}/>
        <Route path={process.env.PUBLIC_URL + "/signup"} component={SignUp}/>
        <Route path={process.env.PUBLIC_URL + "/viewquiz"} component={QuizViewerContainer}/>
      </div>
    </Router>
  )
}

export default RouterPage;
