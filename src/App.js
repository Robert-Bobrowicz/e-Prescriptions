import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Patient from './Components/Patient/Patient';
import Physician from './Components/Physician/Physician';
import Prescriptions from './Components/Prescriptions/Prescriptions';
import LinkToIKP from './Components/LinkToIKP/LinkToIKP';

function App() {
  return (
    <div className="App">
      <Header />
      <Patient />
      <Physician />
      <Prescriptions />
      <LinkToIKP />
      <Footer />
    </div>
  );
}

export default App;