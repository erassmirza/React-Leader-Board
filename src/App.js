import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <h1 className="mainHeading">Leadersboard</h1>
      <Student name="Erass Mirza" uni="NED University" score={349} />
      <Student name="Faheem Ahmad" uni="NED University" score={345} />
      <Student name="Siraj Ul Haq" uni="NED University" score={341} />
      <Student name="Umar Ahmad" uni="NED University" score={335} />
      <Student name="Rizwan" uni="NUST" score={348} />
    </div>
  );
}

export default App;
