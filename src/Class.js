import React, { Component } from 'react';

export default class Class extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col s12 m6 l6 card-panel red">
              <span className="white-text">I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
              </span>
            </div>
            <div className="col s12 m6 l6 card-panel red">
                <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span>
              </div>

          </div>
        </div>

    );
  }
}
