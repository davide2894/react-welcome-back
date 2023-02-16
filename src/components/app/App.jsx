import './App.scss';
import WelcomeBackTextInput from '../welcomeBackTextInput/WelcomeBackTextInput';
import Body from '../body/Body';
import {useState} from 'react';

function App() {
  const [welcomeBackName, setWelcomeBackName] = useState("");
  const [shouldShowMessage, setShouldShowMessage] = useState(false);
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setWelcomeBackName(e.target.value);
  }

  function handleSubmit(e) {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setShouldShowMessage(welcomeBackName.length ? true : false);
    setName(welcomeBackName);
  }

  return (
    <div className="app">
       <main className="app__main">
            <WelcomeBackTextInput name={welcomeBackName} onNameChange={handleNameChange} onNameSubmit={handleSubmit}/>     
            <Body name={name} shouldShowMessageProp={shouldShowMessage}/>
        </main>
    </div>
  );
}

export default App;
