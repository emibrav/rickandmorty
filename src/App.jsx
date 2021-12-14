import './App.css';
import {useState} from "react";
import Form from './components/Form';
import PrintData from './components/PrintData';

function App() {

  const [characterName, setCharacterName] = useState('')

  return (
    <>
      <div className="container">
        <Form setCharacterName={setCharacterName}/>
        <PrintData characterName={characterName}/>
      </div>
    </>

  );
}

export default App;
