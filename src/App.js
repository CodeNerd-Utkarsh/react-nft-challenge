import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import axios from "axios";
import PunkList from './components/PunkList/PunkList';
import Main from './components/Main/Main';
function App() {
  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getNFTData = async () => {
      const openseaData = await axios
        .get('https://testnets-api.opensea.io/assets?asset_contract_address=0xb792A25d720aE0F0e0285e4458943ecDA79A48EA&order_direction=asc')
      setpunkListData(openseaData.data.assets)
    }
    return getNFTData()
  }, [])
  // console.log(selectedPunk);
  return (
    <div className="app">
      <Header />
      {/* <CollectionCard
        id={0}
        name={'Bandanna Punk'}
        traits={[{ 'value': 7 }]}
        image='https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM=s0'
      /> */}
      {/* do not call until api call is done */}
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk} />
        </>
      )

      }
    </div>
  );
}

export default App; 
