import React from "react";

const Coin = ({ coin = {} }) => {
 return (
  <div className="min-h-[200px]">
   <h1 className="text-lg text-slate-600 font-bold text-center mb-3">
    {coin?.name} {coin?.symbol}
   </h1>
   <div className="text-base">
    <b>Rank:</b> {coin?.rank}
   </div>
   <div className="text-base">
    <b>Symbol:</b> {coin?.symbol}
   </div>
   <div className="text-base">
    <b>Price:</b> {coin?.priceUsd} USD
   </div>
   <div className="text-base">
    <b>Change Percent 24Hr:</b> {coin?.changePercent24Hr} %
   </div>
   <div className="text-base">
    <b>Max supply:</b> {coin?.maxSupply || "N/A"}
   </div>
   <div className="text-base">
    <b>Market Cap Usd:</b> {coin?.marketCapUsd} USD
   </div>
  </div>
 );
};

export default Coin;
