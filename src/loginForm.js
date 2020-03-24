import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e){
        e.preventDefault();
        console.log("handleOnsubmit method called");
        const error= this.props.handleOnSubmit(e);
        if(!error){
            e.target.elements.email.value='';
            e.target.elements.password.value='';
        }
    }

render() {
return (

<div id="container">
      <div className="form-wrap">
      <h1>Login Form</h1>
        <form method='post' onSubmit={this.handleOnSubmit}>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email"  />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password"  />
          </div>
          
          <button type="submit" className="btn">Login</button>
          
        </form>
      </div>
      </div>
)
}
}

export default LoginForm;