import {useState} from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    let playerName = <span className='player-name'>{name}</span>

    let buttonName = ''
    if (isEditing){
        playerName = <input input='text' required className='player-name' hint={name}></input>
        buttonName = 'Save'
    } else  {
        playerName = <span className='player-name'>{name}</span>
        buttonName = 'Edit'
    }

    function changeIsEditing(){
        if (isEditing){
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    return (
        <li>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={()=>changeIsEditing()}>{buttonName}</button>
        </li>
    )
}