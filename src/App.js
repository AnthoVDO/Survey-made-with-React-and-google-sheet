import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import "axios";
import axios from 'axios';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      age:"",
      country:'',
      languages:"",
      framework:"",
      hobby:"",
      place:""
    }
  }

  

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/870890b8-5a43-4bba-ba5f-c7c01acf585e', this.state).then(response=>{console.log(response)})
  }


  render() {
    const {name, age, country, languages, framework, hobby, place} = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>About you</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name="name" value={name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name="age" value={age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            <input placeholder='Country' type="text" name="country" value={country} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Programing languages used</label>
            <input placeholder='Enter your programing languages used' type="text" name="languages" value={languages} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Favorite framework</label>
            <input placeholder='Enter your favorite framework' type="text" name="framework" value={framework} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name="hobby" value={hobby} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Recommanded place</label>
            <input placeholder='Enter the place that you visited and that you recommande' type="text" name="place" value={place} onChange={this.changeHandler}/>
          </Form.Field>

          <h2>Thank you for the test :D</h2>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
