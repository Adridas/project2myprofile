import './App.css';
import Photo from './photo';
import Main from './name';
import Footer from './footer';


function App() {
  return (
    <div className="container">
      <Photo /> 
      <Main />  
      <Footer />
      
    </div>
  );
}

export default App;


// {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}