import React from 'react';
import { connect } from 'react-redux';
import { addQuestions } from '../actions';

const QuestionForm = (props) => {

  const renderInputs = () => {
    const inputs = [];
    for (let i=0; i<5; i++) {
      const key = `cat-${i}`
      const input = <input className='qInput' required/>
      inputs.push(
        <div className='questContainer' key={key}>
          <h5>{`Question ${i+1} (${100*(i+1)} points)`}</h5>
          {input}
        </div>
      )
    }
    return inputs;
  }

  const testSubmit = (e) => {
    e.preventDefault();
    const formChildren = Array.from(e.target.childNodes);
    const questContainerNodes   = formChildren.filter(node => node.className==='questContainer');
    const questNodes = questContainerNodes.map(container => {
      const questNode = Array.from(container.childNodes).filter(node => node.className==='qInput')
      return questNode;
    });
    const questions = questNodes.map(node => node[0].value);
    questNodes.forEach(node => node[0].value='')
    props.dispatch(addQuestions(questions));
  }


  return (
    <div>
      <form onSubmit={testSubmit}>
        <h4>Category: {props.categories[props.catIndex].name}</h4>
        {renderInputs()}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.categories,
  catIndex: state.catIndex
})


export default connect(mapStateToProps)(QuestionForm);