import React, { useState } from "react"
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useStores } from "../hooks/use-stores";

export const UserForm = () => {
    const { userStore } = useStores();
    const [loggedIn, setLoggedIn] = useState(false);

    const onSignIn = (googleResponse:GoogleLoginResponse | GoogleLoginResponseOffline) => {
        const loginResponse = googleResponse as GoogleLoginResponse;
        if(loginResponse) {
            userStore.setUserInfo(
                loginResponse.accessToken,
                loginResponse.profileObj.name);
        }
    }

    //const signOut = () => {
        //var auth2 = gapi.auth2.getAuthInstance();
        //auth2.signOut().then(function () {
        //  console.log('User signed out.');
        //});
    //}
      
    return <div>
        { !loggedIn && <GoogleLogin
            clientId="561323144098-35381kgo8aohv1ndgvenjfpp76m87ka1.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={res => { onSignIn(res); setLoggedIn(true); } }
            onFailure={onSignIn}
            cookiePolicy={'single_host_origin'}
            responseType='id_token'
            />
        }
        { loggedIn && <p>Hello {userStore.user?.name}!</p> }
    </div>
}