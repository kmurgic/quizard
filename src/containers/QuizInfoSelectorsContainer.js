import React from 'react';
import QuizInfoSelectors from '../components/QuizInfoSelectors';
import { connect } from 'react-redux';
import { addQuizInfo } from '../actions';

const QuizInfoSelectorsContainer = props => {
    const handleChange = e => {
        e.preventDefault();
        const stateKey = e.target.getAttribute('statekey');
        const stateVal = e.target.value;
        const info = {...props.info};
        console.log(info);
        info[stateKey] = stateVal;
        console.log('new info', info)
        props.addQuizInfo(info);
    }

    return (
        <QuizInfoSelectors handleChange={handleChange}/>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addQuizInfo: info => dispatch(addQuizInfo(info))
    }
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizInfoSelectorsContainer)