import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DarkNav from './DarkNav';
import Home from './Home';
import Detail from './Detail';
import CreateForm from './CreateForm';
import EditForm from './EditForm';
import Footer from './Footer';

function App() {
  return (
    <div className="main">
      <Router>
        <DarkNav />
        <Switch>
          <Route exact path="/blogs" component={Home} />
          <Route exact path="/blogs/new" component={CreateForm} />
          <Route exact path="/blogs/:id" component={Detail} />
          <Route exact path="/blogs/:id/edit" component={EditForm} />
          <Route path="/" component={Home} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
