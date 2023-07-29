// import React, { useState } from 'react';

// const InteractiveTable = () => {
//   const [tableData, setTableData] = useState([
//     ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
//     ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3'],
//     // Initial table data, you can customize this as needed
//   ]);

//   // Add row function
//   const addRow = () => {
//     setTableData([...tableData, new Array(tableData[0].length).fill('')]);
//   };

//   // Add column function
//   const addColumn = () => {
//     setTableData((prevTableData) =>
//       prevTableData.map((row) => [...row, ''])
//     );
//   };

//   // Render the table
//   return (
//     <div>
//       <button onClick={addRow}>Add Row</button>
//       <button onClick={addColumn}>Add Column</button>
//       <table>
//         <tbody>
//           {tableData.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, columnIndex) => (
//                 <td key={columnIndex}>{cell}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InteractiveTable;
