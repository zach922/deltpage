import React from 'react';
import Navbar from './Navbar';
import Roster from './Roster';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Roster />
        <Contact />
      </div>
    )
  }
}

export default App;