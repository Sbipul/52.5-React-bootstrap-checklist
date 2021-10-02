import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Error from './component/Error/Error';
import NavBar from './component/NavBar/NavBar';
import AllMeal from './component/AllCard/AllMeal';
import DetailMeal from './component/DetailMeal/DetailMeal';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/meals">
          <AllMeal></AllMeal>
        </Route>
        <Route path="/details/:mealId">
          <DetailMeal></DetailMeal>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
