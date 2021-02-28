import React, { useState } from 'react';
import Profile  from './Profile';
import { Directory } from './Directory';

const App = () => {
  
const [ currentUsername, setCurrentUsername ] = useState(null)


 const handleChoose = (newUsername) => {
    setCurrentUsername(newUsername);
  }

 const handleReturnToDirectoryClick= () => {
  setCurrentUsername(null);
  }
 
    let body;
    if (currentUsername) {
      body = (
        <Profile
          username={currentUsername}
          onChoose={handleChoose}
        />
      );
    } else {
      body = <Directory onChoose={handleChoose} />;
    }

    return (
      <div className="App">
        <header>
        { console.log('current Username ',currentUsername) }

          <h1>PetBook</h1>
          <nav>
            {currentUsername && (
              <button onClick={handleReturnToDirectoryClick}>
                Return to directory
              </button>
            )}
          </nav>
        </header>

        <main>{body}</main>
      </div>
    );
  }


export default App;