import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function Login() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
            switch (event) {
                case 'signIn':
                case 'cognitoHostedUI':
                    getUser().then(userData => setUser(userData));
                    break;
                case 'signOut':
                    setUser(null);
                    break;
                case 'signIn_failure':
                case 'cognitoHostedUI_failure':
                    console.log('Sign in failure', data);
                    break;
            }
        });

        getUser().then(userData => setUser(userData));
    }, []);

    function getUser() {
        return Auth.currentAuthenticatedUser()
            .then(userData => userData)
            .catch(() => console.log('Not signed in'));
    }

    return (
        <div>
            {user ? (
                <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {user ? user.attributes.email : 'None'}
                    </button>
                    <button className="nav-link btn btn-outline-dark text-black" onClick={() => Auth.signOut()}>  Sign Out <i className="bi bi-box-arrow-right me-1 text-black" /></button>
                </div>
            ) : (
                <button className="nav-link btn btn-outline-dark text-black" onClick={() => Auth.federatedSignIn()}> <i className="bi bi-person-fill me-1 text-black" /> Sign In</button>
            )}
        </div>
    );
}

export default Login;