
import './App.css';
import Resume1 from './components/reusme/resume1';
// import About from './components/about';
// import Login from './components/Login';
import Dataform from './components/data_form';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name'>Resume Builder</h1>

         
          
         {/* <Login /> */}
         <Resume1 />
         <Dataform />
        
      </header>
    </div>
  );
}

export default App;
