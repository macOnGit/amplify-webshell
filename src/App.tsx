import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

export default function App() {

  const getResources = () => {
    fetch('https://ok4v8ttm45.execute-api.us-east-1.amazonaws.com/Prod/resources')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <p>Hello {user?.username}</p>
          <button onClick={getResources}>Get Resources</button>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}