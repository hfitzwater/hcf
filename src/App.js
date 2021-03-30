import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

function App() {
  const Routable = withRouter(({ history, location }) => (
    <div className="container sm m-auto">
      <Header />
      <Navigation />

      <div className="p-4">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  ));

  return (
    <div className="App">
      <Router>
        <Routable />
      </Router>
    </div>
  );
}

export default App;