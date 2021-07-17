import React from 'react';
import List from './List.jsx';
const axios = require('axios');
// import Random from './Random.jsx';
import Add from './Add.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentlist : []
    }

    this.changepage = this.changepage.bind(this);
    this.getStudents = this.getStudents.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents()
  }

  getStudents(){
    // Todo: Add your code here to retrieve all students from the database
    axios.get('/api/students')
    .then(result => {
      this.setState({
        studentlist : result.data
      })
    })
    .catch(err => console.log(err))
  }

  changepage(e){
    // Todo: Add your logic to "change pages" here on button click
    this.setState({
      page: e.target.value
    })
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <button onClick={this.changepage} value='home'>Back</button>
          <Add students={this.state.studentlist}/>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <button onClick={this.changepage} value='home'>Back</button>
          <List students={this.state.studentlist}/>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <button onClick={this.changepage} value='home'>Back</button>
          <Random />
        </div>
      )
    } else {
      return (
        <div>

          <button onClick={this.changepage} value='add'>Add Student</button>
          <button onClick={this.changepage} value='list'>List Students</button>
          <button onClick={this.changepage} value='random'>Random Student</button>
        </div>
      )
    }
  }
}

