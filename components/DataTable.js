import React from "react";
const Table = ({ data = [], rows = [], columns = [], onItemSelect = () => {} }) => {
 return (
  <div className="overflow-x-auto">
   <table className="table">
    <thead>
     <tr>
      {columns.map((column) => (
       <th key={column?.name} className={`text-base ${column?.width || "w-1/4"}`}>
        {column?.name}
       </th>
      ))}
     </tr>
    </thead>
    <tbody>
     {data.map((item, index) => (
      <tr key={index} className="hover:bg-base-300 cursor-pointer" onClick={() => onItemSelect(item)}>
       {rows.map((row) => (
        <td className="text-sm" key={row}>
         {item[row]}
        </td>
       ))}
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};
export default React.memo(Table);
