import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            calories: 0,
            weight: 0,
            age: 0,
            gender: '',
            activity: 0,
            goal: 12
        }
    }

handleChange= ({target}) => {
    this.setState({ [target.name]: target.value});
}

handleCalories = () => {
    let cals = this.state.weight * this.state.goal - this.state.activity;
    if (this.state.age>29 && this.state.age<40){
        cals*=.95;
    }
    if (this.state.age>39 && this.state.age<50){
        cals*=.9;
    }
    if (this.state.age>49 && this.state.age<60){
        cals*=.85;
    }
    if (this.state.age>59 && this.state.age<70){
        cals*=.8;
    }
    if (this.state.age>69){
        cals*=.7;
    }
    if (this.state.gender == 'female'){
        cals*=.9;
    }
    this.setState({ calories: cals})
}


render(){
    return (
        <div className='container'>
          <label id="label">Weight in Pounds:</label> <br />
  <input type="number" id='a' name="weight" value={this.state.weight} onChange={this.handleChange} min="0" max="999" />
<br />
  <label id="label">Age:</label> <br />
  <input type="number" id='a' name="age" min="0" max="120" value={this.state.age} onChange={this.handleChange} />
 <br />
 
        <label for="gender" id="label">Gender:</label> <br />
          <input type="radio" id='b' name="gender" value="male" onChange={this.handleChange} />
  <label for="male" id="gen">Male</label> <br />
  
          <input type="radio" id='b' name="gender" value="female" onChange={this.handleChange} />
  <label for='female' id="gen">Female</label><br />



        <label id="label">Activity per week:</label> <br />
  <select name="activity" id='a' className="activity" onChange={this.handleChange}>
      <option value='0'>Very little activity</option>
      <option value='-300'>Moderate activity</option>
      <option value='-500'>High activity</option>
      </select>
<br />
      <label id="label">I want to:</label> <br />
  <select name="goal" id='a' className="goal" onChange={this.handleChange}>
      <option value='12'>Lose weight</option>
      <option value='15'>Maintain weight</option>
      <option value='17'>Gain weight</option>
      </select>
      <br /><br />
      <input type="submit" id='sub' value="Submit" onClick={this.handleCalories} />
<br />
    <p>Approximately {this.state.calories} calories per day are needed.</p>
        </div>


        
    )}
};

export default Calculator;