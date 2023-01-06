import Header from './components/Header';
import React, { createContext, useState } from 'react';

import Select from './components/Select';
import Rules from './components/Rules';

export const scoreContext = React.createContext('');
//export let SearchBarFocus = React.createContext();
function App() {
  //let [points, setPoints] = useState(0);
  let vv = { points: 0 };

  return (
    <div className="App">
      <scoreContext.Provider value={vv}>
        <header className="App-header">
          <Header></Header>
        </header>
        <Select></Select>
      </scoreContext.Provider>
      <Rules></Rules>
    </div>
  );
}

export default App;
