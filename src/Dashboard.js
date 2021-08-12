//1.
import React from 'react';
import Amplify from 'aws-amplify';
//2.
import awsExports from './aws-exports';
//3.
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

//4.
Amplify.configure(awsExports)

function Dashboard() {
 return(
    <div>
        <AmplifySignOut/>
        <h1>This is your logged in dashboard.</h1>
    </div>
 )
}

//6.
export default withAuthenticator(Dashboard)
