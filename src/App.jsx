
import './App.css';
import Footer from './components/Footer';
import ListProyects from './components/ListProyects';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import SkillsRotativo from './components/SkillsRotativo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListProyects />
      <Skills />
      <SkillsRotativo/>
      <Footer />
     
    </div>
  );
}

export default App;
