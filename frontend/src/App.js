
import './App.css';
import Home from './Components/Home';
import{BrowserRouter,Route,Switch } from "react-router-dom"
import Login from './Components/Login';
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
