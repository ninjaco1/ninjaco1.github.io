import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import About from './Views/About';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path='/' component={About}/>
    </div>
  );
}

export default App;
