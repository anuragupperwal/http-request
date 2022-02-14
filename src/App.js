import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create/Create';
 
import './App.css';
import Navbar from './components/NavBar/NavBar';
import BlogDetails from './components/BlogDetails/BlogDetails';
import PageNotFound from './components/pageNotFound/PageNotFound';
import LoginButton from './components/LoginButton(Auth0)/LoginButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/Login">
              <LoginButton />
            </Route>
            <Route path = "/Create">
              <Create />
            </Route>
            <Route path = "/Blogs/:id">
              <BlogDetails />
            </Route>
            <Route path = "*">
              <PageNotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
