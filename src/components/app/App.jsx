import './App.scss';
import Header from '../header/Header';
import Body from '../body/Body';
import {useState} from 'react';

function App() {

  const [user, setUser] = useState("Joe")

  return (
    <div className="app">
       <main className="app__main">
            <Header userName={user}/>
            <Body userName={user}/>
        </main>
    </div>
  );
}

export default App;
