import logo from './logo.svg';
import './App.css';



function App() {


  const onSubmit = () => {
    console.log(process.env.REACT_APP_API_ENDPOINT)
    const url = process.env.REACT_APP_API_ENDPOINT + "/?name=API"
    fetch(url).then(response => {alert(response); console.log(response.body)});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br />
          REACT_APP_API_ENDPOINT: {process.env.REACT_APP_API_ENDPOINT}
        </p>

        <p><label for="name"><input type="text" id="name" /></label></p>
        <p><label for="submit"><button id="submit" onClick={onSubmit}>OK</button></label></p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
