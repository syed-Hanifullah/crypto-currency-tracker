import React, { useEffect, useState } from "react";
import { useLoaderData, Form, useActionData } from "@remix-run/react";
import DataTable from "components/DataTable";
import Card from "components/Card";
import Input from "components/form/Input";
import Modal from "components/Modal";
import Coin from "components/Coin";
import Toast from "components/Toast";
import { handleGetCoins } from "~/utils/cryptocurrencies";
import { filterCoins } from "~/utils/filterCoins";
import { saveCoin } from "~/utils/api";

const columns = [{ name: "Symbol", width: "w-1/6" }, { name: "Name", width: "w-1/6" }, { name: "Price USD" }, { name: "Change Percent 24Hr" }];
const rows = ["symbol", "name", "priceUsd", "changePercent24Hr"];

export const loader = async () => {
 try {
  const response = await handleGetCoins();
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
 } catch (error) {
  console.log("Error fetching data:", error);
  return [];
 }
};
export const action = async ({ request }) => {
 try {
  const body = await request.formData();
  const coin = JSON.parse(body.get("coin"));
  return await saveCoin(coin);
 } catch (e) {
  throw new Error();
 }
};
const Index = () => {
 const { data } = useLoaderData();
 const message = useActionData();

 const [searchValue, setSearchValue] = useState("");
 const [filteredData, setFilteredData] = useState([]);
 const [selectedItem, setSelectedItem] = useState(null);
 const [toast, setToast] = useState(false);

 useEffect(() => {
  if (message) setToast(message);
 }, [message]);

 const handleSearchOnChange = (e) => {
  setSearchValue(e.target.value);
  setFilteredData(filterCoins(data, e.target.value));
 };

 return (
  <Card className="mb-5">
   {toast && <Toast message={toast} visible={toast} setVisible={setToast} />}
   <div className="flex justify-between items-center mb-8">
    <h1 className="text-lg text-slate-600 font-bold">Crypto Coins</h1>
    <Input placeholder="Search coins" value={searchValue} onChange={handleSearchOnChange} />
   </div>
   <DataTable columns={columns} rows={rows} data={searchValue ? filteredData : data} onItemSelect={setSelectedItem} />
   {selectedItem && (
    <Form method="post">
     <Modal open={selectedItem} onClose={() => setSelectedItem(null)}>
      <Coin coin={selectedItem} />
      <input type="hidden" name="coin" value={JSON.stringify(selectedItem)} />
     </Modal>
    </Form>
   )}
  </Card>
 );
};
export default Index;
