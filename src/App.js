import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Pages/Home";
import Article from "./Pages/Article";
import { AppWraper } from './styled';


function App() {
  return (
    <Router>
      <AppWraper maxWidth="lg">
        <Switch>
          <Route exact path="/article/:title" component={Article} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Redirect exact to="/" from="/*" component={Home} />
      </AppWraper>
    </Router>
  );
}

export default App;