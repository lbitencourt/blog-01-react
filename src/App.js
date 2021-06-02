import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './views/About';
import { Description } from './views/Description';
import { BlogList } from './views/BlogList'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route paht="/blog">
            <BlogList />
          </Route>
          <Route path="/description">
            <Description />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
