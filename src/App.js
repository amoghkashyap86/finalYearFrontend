import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme';
import Footer from './components/Footer';
import Login from'./components/Login'
import Home from './components/Home'
import {Route,Switch} from "react-router-dom"
import Register from "./components/Register"
function App() {
  console.log("I am running app.js")
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
          <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/checkout" component={Checkout}/> */}
          </Switch>
          </ThemeProvider>
    </div>
  );
}

export default App;
