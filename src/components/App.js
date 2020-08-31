import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Philanthropy from './Philanthropy';
import Roster from './Roster';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />  
          <Route path='/philanthropy' component={Philanthropy} />
          <Route path='/roster' component={Roster} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;