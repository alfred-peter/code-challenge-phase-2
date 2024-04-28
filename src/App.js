
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Transactions from './components/Transactions';


function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <Form/>
      <Transactions/>
      

    </div>
  );
}

export default App;
