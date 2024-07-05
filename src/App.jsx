import './App.css';
import Apifetching from './Components/Apifetching';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Apifetching/>
      <Footer/>
    </div>
  );
}

export default App;
