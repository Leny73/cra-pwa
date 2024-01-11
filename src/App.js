import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Main from './components/Main'
import PrayerOrders from './components/PrayerOrders';
import Songs from './components/Songs';
import Formulas from './components/Formulas';
import Prayers from './components/Prayers';
import Prayer from './components/Prayer';
import Formula from './components/Formula';
import Song from './components/Song';
import PrayerOrder from './components/PrayerOrder';
import {
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';




function App() {
  const [prayers, setPrayersData] = useState([])
  const [formulas, setFormulasData] = useState([])
  const [psalms, setPsalmsData] = useState([])
  const [songs, setSongsData] = useState([])

  function getData() {
    fetch('/all-data')
    .then(response => response.json()).then(res => {
      const [formulas , psalms, songs, prayers] = res.data;
      setSongsData(songs);
      setPrayersData(prayers);
      setFormulasData(formulas);
      setPsalmsData(psalms)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    
    useEffect(() => {
      getData()
    },[])

  return (
    <div className="App" >
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Main prayers={prayers} formulas={formulas} psalms={psalms} songs={songs}/>} />
        <Route exact path="/prayers" element={<Prayers prayers={prayers}/>}/>
        <Route exact path="/prayers/:prayerId" element={<Prayer />} />
        <Route exact path="/formulas" element={<Formulas formulas={formulas}/>} />
        <Route exact path="/formulas/:formulaId" element={<Formula formulas={formulas}/>} />
        <Route exact path="/songs/" element={<Songs songs={songs}/>} />
        <Route exact path="songs/:songId" element={<Song songs={songs}/>} />
        <Route path="/prayerorders" element={<PrayerOrders />} />
        <Route path="/prayerorders/:prayerOrderId" element={<PrayerOrder />} />
        <Route path="/psalms" element={<Prayers psalms={psalms}/>} />
        <Route path="/psalms/:psalmId" element={<Prayer psalms={psalms}/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
