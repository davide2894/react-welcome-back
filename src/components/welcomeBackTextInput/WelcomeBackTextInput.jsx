import React from 'react';
import './WelcomeBackTextInput.scss';

function WelcomeBackTextInput({name, onNameChange, onNameSubmit}) {
    return (
        <form onSubmit={(e) => onNameSubmit(e)} >
            <input 
                value={name}
                onChange={e => onNameChange(e)} 
                placeholder="Type who to welcome back"
            />   
            <button>Submit</button>
        </form>
    )
}

export default WelcomeBackTextInput