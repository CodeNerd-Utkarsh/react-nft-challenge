import React from 'react';
import './Collectioncard.css'
import weth from '../../assets/weth.png'
import './Collectioncard.css'
function CollectionCard({ id, name, traits, image }) {
    return (
        < div className="collectionCard">
            <img src={image} alt="" />
            <div className="details">
                <div className="name">
                    {name} <div className="id">#{id}</div>
                </div>
                <div className="priceContainer">
                    <img src={weth} alt="" className="wethImage" />
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard;
