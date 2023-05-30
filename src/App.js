import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Search />
        <Cards />
     
      </header>
    </div>
  );
}

export default App;
