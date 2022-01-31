import React, { useEffect, useState } from 'react';
import './Main.css'
import instagramLogo from '../../assets/owner/instagram.png'
import twitterLogo from '../../assets/owner/twitter.png'
import moreIcon from '../../assets/owner/more.png'
import PunkList from '../PunkList/PunkList';
function Main({ selectedPunk, punkListData }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk])
  // console.log(activePunk);
  console.log(selectedPunk);
  return (
    <div div className="main" >
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img src={
              activePunk.image_url
            } alt="" className="selectedPunk" />
          </div>
        </div>
        <div className="punkDetails" style={{ color: '#fff' }}>
          <div className="title">
            {activePunk.name
            }
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={
                activePunk.owner.profile_img_url
              } alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">
                  {activePunk.owner.address}
                  {/* 0xeef77e392b860c810052e7c24b545f913dc2fabd */}
                </div>
                <div className="ownerHandle">@utkarshsinghh8ase/</div>
                {/* <div className="ownerLink">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )

}

export default Main;

