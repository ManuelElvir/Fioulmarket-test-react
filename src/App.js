import React from 'react';
import RegistrationForm from './Form/RegistrationForm';
import LoginForm from './Form/LoginForm';
import './App.css'
import {TabHeader, TabContent, TabHeaderItem, TabContainer} from './Components/Tab';
import { LOGIN, REGISTER } from './helpers/tabs';
function App() {
  return (
    <div className="App">
      <TabContainer>
        <TabHeader>
          <TabHeaderItem filter={LOGIN}>J'ai un compte</TabHeaderItem>
          <TabHeaderItem filter={REGISTER}>Je n'ai pas compte</TabHeaderItem>
        </TabHeader>
        <TabContent filter={LOGIN}>
          <LoginForm />
        </TabContent>
        <TabContent filter={REGISTER}>
          <RegistrationForm />
        </TabContent>
      </TabContainer>
    </div>
  );
}

export default App;
