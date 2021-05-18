import React, { Component } from 'react';
import { Link } from "react-router-dom";

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class Login extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App" >
         <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="#">
          SandyMan
        </a>
        </nav>
        <form>
        <fieldset>
        <legend>Login</legend>
        <div style={{justifyContent:"center",border:"1px solid black",padding:"40px",marginLeft:"580px",marginRight:"580px"}}>
        <Link to ="/home">
        <div style={{}}>
        <FacebookLogin
        appId="456337245456800" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}/>
        </div>
        </Link>
      <br />
      <br />
     
      <Link to ="/home">
        <div >
      <GoogleLogin
        clientId="808797901866-ppt20as78agobdd1udmr1ibqdujutk7m.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
       </div>
        </Link>
        </div>
        </fieldset>
        </form>

      </div>
    );
  }
}

export default Login;


