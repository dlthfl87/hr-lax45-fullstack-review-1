import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      imgurl: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showPreview = this.showPreview.bind(this);
  }

  changeHandler(e){
    e.preventDefault()
    // Todo: Add your code here to handle the data the client inputs
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    // Todo: Add your code here to handle the API requests to add a student
    axios.post('/api/students', {
      name: this.state.name,
      imageUrl: this.state.imgurl
    })
    .then(() => {
      console.log('success!!')
    })
    .catch(err => console.log(err))
  }

  showPreview(){
    return (
      (this.state.name && this.state.imgurl) ? (
        <div>
          <img src={this.state.imgurl}></img>
          <h2>{this.state.name}</h2>
        </div>
      ) : (
        <div>
          Fill out the form and a preview will appear here...
        </div>
      )
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Student Name: </label>
          <input onChange={this.changeHandler} type="text" name="name" />
          <label>Image URL: </label>
          <input onChange={this.changeHandler} type="text" name="imgurl" />
          <button type="submit" value="Submit">Submit</button>
        </form>
        <h1>Preview:</h1>
        <div>{this.showPreview()}</div>
      </div>
    )
  }
}