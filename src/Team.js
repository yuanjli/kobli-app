import React, { Component } from 'react';
import './Team.css';




class Team extends Component {

  render() {


  	const currentTeam = this.props.team.team.map(person => <p><a href="#">{person}</a></p> )


    return (



          <div>
            <div className="card col s12 m12 l12">
			    <div className="card-image waves-effect waves-block waves-light">
			      <img className="activator img-size" src="https://laborplaststorage.blob.core.windows.net/imgsito/49a87d99-e999-4bde-b790-ef32015c107d.jpg" />
			    </div>
			    <div className="card-content">
			      <span className="card-title activator grey-text text-darken-4">
			      		{this.props.team.teamName} <i className="material-icons right">more_vert</i>
			      </span>
			      	{currentTeam}
			    </div>
			    <div className="card-reveal">
			      <span className="card-title grey-text text-darken-4">
			      Card Title<i className="material-icons right"> close</i>
			      </span>
			      <p>Here is some more information about this product that is only revealed once clicked on.</p>
			    </div>
			  </div>
		  </div>


    );
  }
}

export default Team;
