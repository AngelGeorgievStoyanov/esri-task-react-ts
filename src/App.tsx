import { FC } from 'react';
import './App.css';
import Header from './components/Header';
import FindAddress from './components/FindAddress';
import Footer from './components/Footer';
import Map from './components/Map';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Map/>
      <FindAddress />
      <Footer />
    </div>
  );
}

export default App;
