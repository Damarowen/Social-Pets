import React, { useState } from 'react';
import Profile  from './Component/Profile';
import  Directory  from './Component/Directory';

const App = () => {
  
const [ currentUsername, setCurrentUsername ] = useState(null)

/*
 * pilih username 
 */
 const handleChoose = (newUsername) => {
    setCurrentUsername(newUsername);
  }

  /*
 * back to directory
 */
 const handleReturnToDirectoryClick= () => {
  setCurrentUsername(null);
  }
 
    let body;
    if (currentUsername) {
      body = (
        <Profile
          username={currentUsername}
          pilih={handleChoose}
        />
      );
    } else {
      body = <Directory pilih={handleChoose} />;
    }

    return (
      <div className="App">
        <header>
        { console.log('current Username ',currentUsername) }
          <h1>PetBook</h1>
          <nav>
            {currentUsername && (
              <button onClick={handleReturnToDirectoryClick}>
                Return to directory ( set username to null)
              </button>
            )}
          </nav>
        </header>

        <main>{body}</main>
      </div>
    );
  }


export default App;