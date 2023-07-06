const coinCapApiUrl = "https://api.coincap.io/v2/assets";

export const handleGetCoins = async () => {
 try {
  const response = await fetch(coinCapApiUrl);
  if (!response.ok) {
   throw new Error("Error fetching data from CoinCap API");
  }

  const cryptocurrencies = await response.json();
  return new Response(JSON.stringify(cryptocurrencies), {
   headers: { "Content-Type": "application/json" },
  });
 } catch (error) {
  console.error("Error fetching data from CoinCap API:", error);
  return new Response("Internal Server Error", { status: 500 });
 }
};
