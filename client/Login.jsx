import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "383042639792-sr4e1d41vs3f02poclsdc097ao16b5sg.apps.googleusercontent.com";

   const onSuccess = (res) => {
    console.log("Login success! Current user: ", res.profileObj);
   }

   const onFailure = (res) => {
    console.log("Login failed! res: ", res);
   }

const Login = () => {
  return (
    <div id="signInButton">
        <GoogleLogin
            clientID={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />       
    </div>

  )
}

export default Login;
