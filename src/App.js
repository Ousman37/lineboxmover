import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Redirect from='/pristilbud' to='/contact' />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
