import React, { Component } from 'react';
import Team from './Team';

var mArray = ['Brian', 'Niko', 'Li', 'Nate', 'Andy', 'Billy', 'Andres', 'Justin', 'Devan', 'Zach', 'Yinebeb', 'Jon', 'Kelsey'];
var teamArray = ['Brian', 'Niko', 'Li', 'Nate', 'Andy', 'Billy', 'Andres', 'Justin', 'Devan', 'Zach', 'Yinebeb', 'Jon', 'Kelsey'];
var allTeamName = ['Bigfoot', 'Minotaur', 'Dragon', 'Pegasus', 'Chupacabra'];




// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (array.length));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array; 
// }

// const newTeamArray = shuffleArray(mArray); 

// function createOneTeam(pNum, newTeamArray) {
//   var newTeam =[];
//   if(pNum > newTeamArray.length){
//     console.log('choose a number less than', teamArray.length);
//   } else 
//   {
//     for(let i = 0; i < pNum; i++) {
//       var one = newTeamArray[i];
//       newTeam.push(one);
//     }
//     newTeamArray.splice(0, pNum);
//     return newTeam;
//   }
// }


// function createAllTeam(pNum, newTeamArray){
//  const numTeam = Math.floor(teamArray.length/pNum); 
//  const extraP = teamArray.length%pNum; 
//  var allTeams = [];
//   for(let i = 0; i < numTeam; i++){
//     var teamnew = createOneTeam(pNum, newTeamArray);
//     allTeams.push({
//     teamName: allTeamName[i],
//     team: teamnew 
//     });
//   }
//   for (let i =0; i < extraP; i++ ) {
//     allTeams[i].team.push(newTeamArray[i]);
//   }
//   return allTeams;
// }


        // var outputTeams = createAllTeam(3, newTeamArray);




export default class Randomizer extends Component {

 shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (array.length));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array; 
}

 newTeamArray = this.shuffleArray(mArray); 

 createOneTeam(pNum, newTeamArray) {
  var newTeam =[];
  if(pNum > newTeamArray.length){
    console.log('choose a number less than', teamArray.length);
  } else 
  {
    for(let i = 0; i < pNum; i++) {
      var one = newTeamArray[i];
      newTeam.push(one);
    }
    newTeamArray.splice(0, pNum);
    return newTeam;
  }
}


 createAllTeam(pNum, newTeamArray){
 const numTeam = Math.floor(teamArray.length/pNum); 
 const extraP = teamArray.length%pNum; 
 var allTeams = [];
  for(let i = 0; i < numTeam; i++){
    var teamnew = this.createOneTeam(pNum, newTeamArray);
    allTeams.push({
    teamName: allTeamName[i],
    team: teamnew 
    });
  }
  for (let i =0; i < extraP; i++ ) {
    console.log(newTeamArray[i]);
    allTeams[i].team.push(this.newTeamArray[i]);
  }
  return allTeams;
}



  constructor(props) {
    super(props);

    this.state = {
      divisor: 0,
      team: []
    };
  }

  handleChange = (event) => {
    console.log("this is the event's target", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmitClick = (event) => {
    event.preventDefault();
    
    this.state.team = this.createAllTeam(this.state.divisor, this.newTeamArray);
  }

  render() {

  const listOfpeople = teamArray.map((person, indx) => <li key={indx}> {person}</li> )
  const teams = this.state.team.map(team => <Team team={team} /> ) 

    return (

      <div className='container'>



      <div className="row">
      <div className="col s12 m5 l5 card-panel red white-text">
        <h1>Randomizer Team</h1>
          <ul> 
            {listOfpeople} 
          </ul>
          </div>
              <div className="col s0 m2 l2">
              </div>
            <div className="col s12 m5 l5 card-panel red">
              <form onSubmit={this.handleFormSubmitClick}>  
                <span className="white-text"><h3>Num of Students per group</h3>
                <input className="white-text" id='numOfStudent' name='divisor' type='number' placeholder='Number of Students per group' onChange={this.handleChange} required></input>
                </span>
                    <button className="btn-large waves-effect waves-light white red-text right" type="submit" name="action" >Create teams<i className="material-icons right">send</i></button>
                </form>
              </div>
          </div>


          <div className="row">
            <div className="col s12 m12 l12">
              <form>
                <button className="btn-small waves-effect waves-light white red-text left" type="button" name="action" onClick={this.handleAddingStudentClick}>Add Student<i className="material-icons right">send</i></button>
              </form>
            </div>
          </div>


          <div className="row" >
          <h3>TEAMS</h3>
            {teams}
        </div>

          <p>This is TEST for SHOW ! This is a paragraph</p>

      </div>
    );
  }
}


