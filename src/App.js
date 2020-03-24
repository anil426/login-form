import React from 'react';
import './App.css';
import LoginForm from './loginForm';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleOnSubmit=this.handleOnSubmit.bind(this);
    this.state={
      email: undefined,
      password: undefined
    }
    }
  

    componentDidUpdate(){
    
      console.log("componentDidUpdate!");
      axios.post('http://localhost/ReactJsPhp/ReactAjaxReq.php',this.state)
      .then(res => {
        console.log(res.data);
       // JSON.parse(res.data);
        //console.log(res.data.status);
      })


    }
  handleOnSubmit(e){
    console.log(`the method in app.js called`);
    const email=e.target.elements.email.value;
    const password=e.target.elements.password.value;

    this.setState(()=>({email,password}))

  }
  render(){
    return (
      <div className="App">
        <LoginForm  handleOnSubmit={this.handleOnSubmit}/>
        
      </div>
    );
  }
}

export default App;
