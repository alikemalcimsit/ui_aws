import './AwsLogin.css'
import {
    Authenticator,
    withAuthenticator,

  } from "@aws-amplify/ui-react";

  import App from "../App";

  
  
  
  
  
   function AwsLogin({ signOut }) {
  
    
    return (
    
   <Authenticator>
  
    <App/>
  
   </Authenticator>
   
       
    );
  }
  export default withAuthenticator(AwsLogin);