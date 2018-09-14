import React, { Component } from 'react';

export default class Attendance extends Component {
  render() {
    return (
      <div className='container striped'>
        <h1>Attendance page stub</h1>
	      <table className="striped">
	        <thead>
	          <tr>
	              <th>Name</th>
	              <th>Class Name</th>
	              <th>Marks</th>
	          </tr>
	        </thead>

	        <tbody>
	          <tr>
	            <td>Brian</td>
	            <td>WDI</td>
	            <td>great</td>
	          </tr>
	          <tr>
	            <td>Nico</td>
	            <td>WDI</td>
	            <td>Great</td>
	          </tr>
	        </tbody>
	      </table>


      </div>
    );
  }
}
