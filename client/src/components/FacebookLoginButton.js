import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = ({ responseFacebook }) => (
    <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={true}
        fields="name,picture"
        callback={responseFacebook}
    />
);

export default FacebookLoginButton;
