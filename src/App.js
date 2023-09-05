
import './App.css';
import { AboutUS } from './Pages/AboutUs';
import { Contact } from './Pages/Contact';
import { DeltaHedgingEducation } from './Pages/DeltaHedgingEducation';
import { Home } from './Pages/Home';
import { InvestmentsSolution } from './Pages/InvestmentsSolution';
import { Inquiry } from './Pages/Inquiry';
import { Loader } from './components/CommanComponents/Loader';


function App() {
  return (
    <>
      <Loader/>
      <Home/>
      <AboutUS/>
      <InvestmentsSolution/>
      <DeltaHedgingEducation/>
      <Contact/>
      <Inquiry/>
    </>
  );
}

export default App;
