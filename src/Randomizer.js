import React, { Component } from 'react';

export default class Randomizer extends Component {

  handleAddingStudentClick = (e) => {
    e.stopPropagation()
    console.log('handling adding student click');
  }

  handleFormSubmitClick = (e) => {
    e.stopPropagation()
    console.log('handling creating teams button');
  }

  render() {
    const teamArray = ['Brian', 'Niko', 'Li', 'Nate', 'Andy', 'Billy', 'Andres', 'Justin', 'Devan', 'Zach', 'Yinebeb', 'Jon', 'Kelsey']
    return (

      <div className='container'>
        <h1>Randomizer stub</h1>
        <div className="row">
          <div className="col s12 m5 l5 card-panel red">
              <span className="white-text">
                <h3>Students</h3>
                <ul>
                  <li>List</li>
                  <li>of</li>
                  <li>students</li>
                  <li>here</li>
                </ul>
                <form>
                  <input type='text' className="white-text" placeholder='Add Student'></input>


                </form>
              </span>
            </div>
            <div className="col s0 m2 l2">
              </div>
            <div className="col s12 m5 l5 card-panel red">
                <span className="white-text"><h3>Num of Students per group</h3>
                <input className="white-text" id='numOfStudent' type='number' placeholder='Number of Students per group' required></input>
                </span>
              </div>


          </div>

          <div className="row">
            <div className="col s12 m12 l12">
              <form>
                <button className="btn-small waves-effect waves-light white red-text left" type="button" name="action" onClick={this.handleAddingStudentClick}>Add Student<i className="material-icons right">send</i></button>
                <button className="btn-large waves-effect waves-light white red-text right" type="button" name="action" onClick={this.handleFormSubmitClick}>Create teams<i className="material-icons right">send</i></button>

              </form>

            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12 card-panel red white-text">
              <h3>List of Teams</h3>
              <h4>team 1 name</h4>
              <ul>
                <li>
                  members
                </li>
                <li>
                  of
                </li>
                <li>
                  the
                </li>
                <li>
                  team
                </li>
              </ul>
              <h4>team 2 name</h4>
              <ul>
                <li>
                  members
                </li>
                <li>
                  of
                </li>
                <li>
                  the
                </li>
                <li>
                  team
                </li>
              </ul>
              <h4>team 3 name</h4>
              <ul>
                <li>
                  members
                </li>
                <li>
                  of
                </li>
                <li>
                  the
                </li>
                <li>
                  team
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}
