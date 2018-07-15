import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTeams } from '../actions';

const TeamForm = (props) => {
  const renderInputs = () => {
    const inputs = [];
    for (let i=0; i<6; i++) {
      const key = `cat-${i}`
      const input = <input maxLength='25' className='tInput' required/>
      const inputNotReq = <input maxLength='25' className='tInput'/>
      inputs.push(
        <div className='teamContainer' key={key}>
          <h5>{`Team ${i+1}`}</h5>
          {i > 1 ? inputNotReq : input}
        </div>
      )
    }
    return inputs;
  }

  const testSubmit = (e) => {
    e.preventDefault();
    const formChildren = Array.from(e.target.childNodes);
    const teamContainerNodes  = formChildren.filter(node => node.className==='teamContainer');
    const teamNodes = teamContainerNodes.map(container => {
      const teamNode = Array.from(container.childNodes).filter(node => node.className==='tInput')
      return teamNode;
    });
    const teams= teamNodes.map((node, index) => {
      return {name: node[0].value, points: 0};
    })
    teamNodes.forEach(node => node[0].value='')
    props.dispatch(addTeams(teams));
  }


  return (
    <div className='form-page'>
      <h4>Enter Two To Six Team Names</h4>
      <form onSubmit={testSubmit}>
        {renderInputs()}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default connect()(TeamForm);