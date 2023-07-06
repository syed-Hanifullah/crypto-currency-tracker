export const filterCoins = (data = [], searchString = "", filterFor = ["name", "symbol"]) => {
 const searchLower = searchString.toLowerCase();
 const filteredItems = data.filter((obj) => {
  return filterFor.some((key) => {
   const valueLower = obj[key].toLowerCase();
   return valueLower.includes(searchLower);
  });
 });

 return filteredItems;
};
