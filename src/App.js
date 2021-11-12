
import './App.css';
import HomePage from './Pages/Home-Page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Routes>
          <Route path="/" exact={true} component={HomePage} />
          </Routes> */}
      <HomePage />
    </div>
  );
}

export default App;
