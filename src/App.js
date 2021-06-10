import './App.css';
import Person from './Person/Person';
function App() {
  var y = new Date().toString();
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>HI NA ME</h1>
      <button onClick={Onclickproject}>TESTING</button>
      <p>thiss working</p>
      <Person  ={Onclickproject} date={y} />
      <Person date="Just testing"> Want to see how it appear </Person>
    </div>
  );


}
const Onclickproject = () => {
  console.log("Testing to know how it work")
}
export default App;
