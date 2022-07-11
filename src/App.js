import './App.css';

import Display from "./display/Display.js";
import { updateText } from "./features/displaySlice"

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  
  const { bankOne } = useSelector( state => state.keys)
  const dispatch = useDispatch()
  


  const soundPlay = (key) => {
    const sound = document.getElementById(key);
    let playPromise = sound.play();
    if (playPromise !== undefined) {
      playPromise
        .then( _ => {})
        .catch( e => console.log(e))
    }
    sound.currentTime = 0;
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      for (let key of bankOne) {
        e.preventDefault()
        let eventKey = e.key.toUpperCase()
        if (key.keyTrigger === eventKey) {
          soundPlay(eventKey)
          // const button = document.getElementById(`${e.keyTrigger}-button`)
          // button.toggleAttribute("disabled")
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown, true)
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [bankOne])
  
  return (
    <div className="App">
      <div id="drum-machine">
        <Display />
        <div className='pad'>
          {
            bankOne.map( (item, index) => {
              return (
                <button 
                  className="drum-pad" 
                  id={`${item.keyTrigger}-button`}
                  key={index}
                  onClick={ () => soundPlay(item.keyTrigger)}
                  >
                  {item.keyTrigger}
                  <audio 
                    className='clip'
                    id={item.keyTrigger} 
                    src={item.url}
                    onPlay={( () => dispatch(updateText(item.id)) )}
                    ></audio>
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;