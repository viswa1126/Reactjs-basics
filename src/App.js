import logo from './logo.svg';
import './App.css';
import Joe from '../src/components/firstComponent';

function App() {
  return (
    <div className="App">
    <div className="App-header">
     <h1> Hello Guys</h1>
     <Joe name="Joe" age="65"/>
    <Joe name="monaro" age="55"/>
    <Joe name="rax-roman" age="45"/>
    <Joe>Test Fetching data between tags</Joe>
    </div>
    </div>
  );
}

export default App;
