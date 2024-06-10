import {useState} from 'react';

export default function Player({initialName, symbol, isActive}) {
    const [playerName ,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    let playerNameTag = <span className='player-name'>{playerName}</span>

    if (isEditing){
        playerNameTag = <input input='text' required value={playerName} onChange={handleChangePlayerName}></input>
    }

    function handleChangePlayerName(event) {
        setPlayerName(event.target.value);
    }

    function changeIsEditing(){
        setIsEditing((editing)=> !editing)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {playerNameTag}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={()=>changeIsEditing()}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}