import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Randomsearch from './components/Randomsearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/"
            element= {<Search />}>
            </Route>
            <Route path="/popular"
            element={<Randomsearch />}>
            </Route>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
