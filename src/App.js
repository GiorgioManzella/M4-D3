import logo from './logo.svg';
import './App.css';
import CustomAlert from './Components/Alert.jsx';
import SingleBook from './Components/SingleBook';
import scifi from "./Data/scifi.json"
import BookList from './Components/BookList';

function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* <CustomAlert/> */}
          {/* <SingleBook book={scifi[0]}/> */}
          <BookList Books={scifi} />
      </header>
    </div>
    </>);
}

export default App;
