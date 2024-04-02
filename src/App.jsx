import './App.css'
import CryptoPrices from './components/CryptoPrice';
import PopulationGraph from './components/Population';
import Sidebar from './components/sidebar';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {


  return (
    <div className='home'>
      <Sidebar />
      <div className='screen'>
      <PopulationGraph />
      <CryptoPrices />
      </div>
    </div>
  )
}

export default App
