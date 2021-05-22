import logo from '../../assets/logo.svg';
import './App.scss';

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
// import Button from 'react-bootstrap/Button';



function App() {
  return (
    <>
    <Navigation></Navigation>
    <Header></Header>
    <Main></Main>
   <Footer></Footer>

    </>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <Button variant="primary">Primary</Button>{' '}
  // <Button variant="secondary">Secondary</Button>{' '}

  //       <a
  //         className="App-link font-test"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;
