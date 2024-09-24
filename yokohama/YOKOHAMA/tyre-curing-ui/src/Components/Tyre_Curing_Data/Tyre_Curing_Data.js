// // // import React from 'react';

// // // const Tyre_Curing_Data = () => {
// // //     return (
// // //             <div className="content">
// // //       <h1>Browse Tyre Curing Data</h1>
// // //       <p>Here you can browse the tyre curing data.</p>
// // //       {/* Additional content can be added here */}
// // //     </div>
// // //     );
// // // };

// // // export default Tyre_Curing_Data;


// // import React, { useState } from "react";
// // import "./Tyre.css"

 
// // function Tyre_Curing_Data() {  // Updated component name to match app name
// //   const [activeTab, setActiveTab] = useState("left");
 
// //   const renderTable = () => {
// //     if (activeTab === "left") {
// //       return (

// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Time</th>
// //               <th>Cure Equivalent</th>
// //               {/* Add more headers as needed */}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td>Sample Data 1</td>
// //               <td>Sample Data 2</td>
// //               {/* Add more rows and cells as needed */}
// //             </tr>
// //             {/* Add more rows */}
// //           </tbody>
// //         </table>
// //       );
// //     } else if (activeTab === "right") {
// //       return (
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Max Temperature</th>
// //               <th>Cure Equivalent</th>
// //               {/* Add more headers as needed */}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td>Sample Data 3</td>
// //               <td>Sample Data 4</td>
// //               {/* Add more rows and cells as needed */}
// //             </tr>
// //             {/* Add more rows */}
// //           </tbody>
// //         </table>
// //       );
// //     }
// //   };
 
// //   return (
// //     <div className="Tyre_Curing_Data">
// //       <h1>Tyre Curing Data</h1>  {/* Adding a header for the app */}
// //       <div className="tabs">
// //         <button onClick={() => setActiveTab("left")}>
// //           Time and Cure Equivalent Calculation
// //         </button>
// //         <button onClick={() => setActiveTab("right")}>
// //           Maximum Temperature and Cure Equivalent Summary Dashboard
// //         </button>
// //       </div>
// //       <div className="content">
// //         {renderTable()}
// //       </div>
// //     </div>
// //   );
// // }
 
// // export default Tyre_Curing_Data;


// import React, { useState } from "react";
// import "./Tyre.css";

// function Tyre_Curing_Data() {
//   const [activeTab, setActiveTab] = useState("left");

//   const renderTable = () => {
//     if (activeTab === "left") {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Time</th>
//               <th>Cure Equivalent</th>
//               {/* Add more headers as needed */}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Sample Data 1</td>
//               <td>Sample Data 2</td>
//               {/* Add more rows and cells as needed */}
//             </tr>
//             {/* Add more rows */}
//           </tbody>
//         </table>
//       );
//     } else if (activeTab === "right") {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Max Temperature</th>
//               <th>Cure Equivalent</th>
//               {/* Add more headers as needed */}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Sample Data 3</td>
//               <td>Sample Data 4</td>
//               {/* Add more rows and cells as needed */}
//             </tr>
//             {/* Add more rows */}
//           </tbody>
//         </table>
//       );
//     }
//   };

//   return (
//     <div className="Tyre_Curing_Data">
//       <h1>Tyre Curing Data</h1>
//       <div className="tabs">
//         <button onClick={() => setActiveTab("left")}>
//           Time and Cure Equivalent Calculation
//         </button>
//         <button onClick={() => setActiveTab("right")}>
//           Maximum Temperature and Cure Equivalent Summary Dashboard
//         </button>
//       </div>
//       <div className="content">
//         {renderTable()}
//       </div>
//     </div>
//   );
// }

// export default Tyre_Curing_Data;


import React, { useState } from "react";
import "./Tyre.css";

function Tyre_Curing_Data() {
  const [activeTab, setActiveTab] = useState("left");

  const renderTable = () => {
    if (activeTab === "left") {
      return (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Cure Equivalent</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Data 1</td>
              <td>Sample Data 2</td>
              {/* Add more rows and cells as needed */}
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>
      );
    } else if (activeTab === "right") {
      return (
        <table>
          <thead>
            <tr>
              <th>Max Temperature</th>
              <th>Cure Equivalent</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Data 3</td>
              <td>Sample Data 4</td>
              {/* Add more rows and cells as needed */}
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="Tyre_Curing_Data">
      <h1>Tyre Curing Data</h1>
      <div className="tabs">
        <button className="left-button" onClick={() => setActiveTab("left")}>
          Time and Cure Equivalent Calculation
        </button>
        <button className="right-button" onClick={() => setActiveTab("right")}>
          Maximum Temperature and Cure Equivalent Summary Dashboard
        </button>
      </div>
      <div className="content">
        {renderTable()}
      </div>
    </div>
  );
}

export default Tyre_Curing_Data;
