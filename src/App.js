import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting'; // Import the new component

function App() {
  return (
    <div className="App">
      <h1>Welcome to My First React App!</h1>
      <Greeting name="Alice" />
    </div>
  );
}

export default App;
