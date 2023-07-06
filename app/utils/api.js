import { db } from "./db.server";

export const saveCoin = async (coin = {}) => {
 try {
  const existingCrypto = await db.cryptocurrency.findUnique({ where: { id: coin?.id } });
  if (existingCrypto) return `${existingCrypto?.name} has already been saved`;
  const newSavedCoin = await db.cryptocurrency.create({
   data: {
    id: coin?.id,
    code: coin?.symbol,
    name: coin?.name,
    amount: parseFloat(coin?.supply),
    tradeVolume: parseFloat(coin?.volumeUsd24Hr),
    percentageChange: parseFloat(coin?.changePercent24Hr),
   },
  });

  if (newSavedCoin) return "Crypto Coin has been saved successfully";
  else return "Unable to save coin";
 } catch (e) {
  return e?.message || "Unable to save coin";
 }
};
export const getSavedCoins = async () => {
 return await db.cryptocurrency.findMany({});
};
