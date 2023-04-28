import './App.css';
import {Greet, Person, PersonList, Status} from './components/index';

function App() {

  const personName = {
    first: "Shafique ",
    last: "Abbasi ",
    age: 27
  }

  const nameList = [
    { 
      id: 1,
      first: 'Shoaib',
      last: 'Ishtiaq',
    },
    {
      id: 2,
      first: 'Haider Ali',
      last: 'Nawaz'
    },
    {
      id: 3,
      first: 'Jamal Ali',
      last: 'Ali'
    },
    {
      id: 4,
      first: 'Kamal Ali',
      last: 'Nawaz'
    },
    {
      id: 5,
      first: 'Qamer Ali',
      last: 'Ali'
    },
  ]

  return (
    <div className="App">
      {/* <Greet name="Shafique" messageCount={100} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/> */}
      <Status />
    </div>
  );
}

export default App;
