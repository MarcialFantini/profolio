
import './App.css';
import Footer from './components/Footer';
import ListProyects from './components/ListProyects';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListProyects />
      <Skills />
      <Footer />

    </div>
  );
}

export default App;
