// // // import React, { useState, useEffect } from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
 
// // // const TyrePrediction = () => {
// // //   const tyrePatternOptions = ['Pattern A', 'Pattern B', 'Pattern C'];
// // //   const treadCompoundOptions = ['Compound X', 'Compound Y', 'Compound Z'];
// // //   const ilCompoundOptions = ['IL 1', 'IL 2', 'IL 3'];
// // //   const swCompoundOptions = ['SW 1', 'SW 2', 'SW 3'];
// // //   const beltEdgeCompoundOptions = ['Belt A', 'Belt B', 'Belt C'];
 
// // //   const [formData, setFormData] = useState({
// // //     tyreSize: '',
// // //     tyrePattern: tyrePatternOptions[0],
// // //     tyreWeight: '',
// // //     tyreConstruction: '',
// // //     totalGuageCL: '',
// // //     rubberGuageCL: '',
// // //     underTread: '',
// // //     totalGuageShoulder: '',
// // //     rubberGuageShoulder: '',
// // //     bladderThickness: '',
// // //     pressNumber: '',
// // //     moldNo: '',
// // //     treadCompound: treadCompoundOptions[0],
// // //     ilCompound: ilCompoundOptions[0],
// // //     swCompound: swCompoundOptions[0],
// // //     beltEdgeCompound: beltEdgeCompoundOptions[0],
// // //     hpsTime: 8,
// // //     n2Time: '',
// // //     serviceTime: 0.7,
// // //     totalTime: '',
// // //     platenTemp: 145,
// // //     jacketTemp: 140,
// // //     blowPointTime: '',
// // //   });
 
// // //   useEffect(() => {
// // //     const totalTime = parseFloat(formData.hpsTime) + parseFloat(formData.serviceTime);
// // //     const n2Time = totalTime - parseFloat(formData.hpsTime) - parseFloat(formData.serviceTime);
 
// // //     setFormData(prevData => ({
// // //       ...prevData,
// // //       totalTime,
// // //       n2Time,
// // //       platenTemp: formData.treadCompound === 'Compound X' ? 145 : 150,
// // //       jacketTemp: formData.treadCompound === 'Compound X' ? 140 : 135
// // //     }));
// // //   }, [formData.hpsTime, formData.serviceTime, formData.treadCompound]);
 
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };
 
// // //   return (
// // //     <div className="container">
// // //       <div className="row" >
// // //         {/* Left Table */}
// // //         <div className="col-md-6">
// // //           <h2>EXISTING & NEW SIZES</h2>
// // //           <table className="table table-bordered">
// // //             <tbody>
// // //               <tr>
// // //                 <td>Tyre Size</td>
// // //                 <td><input className="form-control" name="tyreSize" value={formData.tyreSize} onChange={handleChange} /></td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Tyre Pattern</td>
// // //                 <td>
// // //                   <select className="form-control" name="tyrePattern" value={formData.tyrePattern} onChange={handleChange}>
// // //                     {tyrePatternOptions.map(option => (
// // //                       <option key={option} value={option}>{option}</option>
// // //                     ))}
// // //                   </select>
// // //                 </td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Tread Compound</td>
// // //                 <td>
// // //                   <select className="form-control" name="treadCompound" value={formData.treadCompound} onChange={handleChange}>
// // //                     {treadCompoundOptions.map(option => (
// // //                       <option key={option} value={option}>{option}</option>
// // //                     ))}
// // //                   </select>
// // //                 </td>
// // //               </tr>
// // //               <tr>
// // //                 <td>IL Compound</td>
// // //                 <td>
// // //                   <select className="form-control" name="ilCompound" value={formData.ilCompound} onChange={handleChange}>
// // //                     {ilCompoundOptions.map(option => (
// // //                       <option key={option} value={option}>{option}</option>
// // //                     ))}
// // //                   </select>
// // //                 </td>
// // //               </tr>
// // //               <tr>
// // //                 <td>SW Compound</td>
// // //                 <td>
// // //                   <select className="form-control" name="swCompound" value={formData.swCompound} onChange={handleChange}>
// // //                     {swCompoundOptions.map(option => (
// // //                       <option key={option} value={option}>{option}</option>
// // //                     ))}
// // //                   </select>
// // //                 </td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Belt Edge Compound</td>
// // //                 <td>
// // //                   <select className="form-control" name="beltEdgeCompound" value={formData.beltEdgeCompound} onChange={handleChange}>
// // //                     {beltEdgeCompoundOptions.map(option => (
// // //                       <option key={option} value={option}>{option}</option>
// // //                     ))}
// // //                   </select>
// // //                 </td>
// // //               </tr>
// // //               {/* Other fields */}
// // //             </tbody>
// // //           </table>
// // //         </div>
 
// // //         {/* Right Table */}
// // //         <div className="col-md-6">
// // //           <h2>Curing Time Prediction</h2>
// // //           <table className="table table-bordered">
// // //             <tbody>
// // //               <tr>
// // //                 <td>HPS Time</td>
// // //                 <td><input className="form-control" name="hpsTime" value={formData.hpsTime} onChange={handleChange} /></td>
// // //               </tr>
// // //               <tr>
// // //                 <td>N2 Time</td>
// // //                 <td>{formData.n2Time}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Service Time</td>
// // //                 <td><input className="form-control" name="serviceTime" value={formData.serviceTime} onChange={handleChange} /></td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Total Time</td>
// // //                 <td>{formData.totalTime}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Platen Temp</td>
// // //                 <td>{formData.platenTemp}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Jacket Temp</td>
// // //                 <td>{formData.jacketTemp}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Blow Point Time</td>
// // //                 <td><input className="form-control" name="blowPointTime" value={formData.blowPointTime} onChange={handleChange} /></td>
// // //               </tr>
// // //               {/* Other fields */}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //       {/* <div className="text-success mt-3">Prediction Completed.</div> */}
// // //     </div>
// // //   );
// // // };
 
// // // export default TyrePrediction;


// // import React, { useState, useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const TyrePrediction = () => {
// //   const tyrePatternOptions = ['Pattern A', 'Pattern B', 'Pattern C'];
// //   const treadCompoundOptions = ['Compound X', 'Compound Y', 'Compound Z'];
// //   const ilCompoundOptions = ['IL 1', 'IL 2', 'IL 3'];
// //   const swCompoundOptions = ['SW 1', 'SW 2', 'SW 3'];
// //   const beltEdgeCompoundOptions = ['Belt A', 'Belt B', 'Belt C'];

// //   const [formData, setFormData] = useState({
// //     tyreSize: '',
// //     tyrePattern: tyrePatternOptions[0],
// //     tyreWeight: '',
// //     tyreConstruction: '',
// //     totalGuageCL: '',
// //     rubberGuageCL: '',
// //     underTread: '',
// //     totalGuageShoulder: '',
// //     rubberGuageShoulder: '',
// //     bladderThickness: '',
// //     pressNumber: '',
// //     moldNo: '',
// //     treadCompound: treadCompoundOptions[0],
// //     ilCompound: ilCompoundOptions[0],
// //     swCompound: swCompoundOptions[0],
// //     beltEdgeCompound: beltEdgeCompoundOptions[0],
// //     hpsTime: 8,
// //     n2Time: '',
// //     serviceTime: 0.7,
// //     totalTime: '',
// //     platenTemp: 145,
// //     jacketTemp: 140,
// //     blowPointTime: '',
// //   });

// //   useEffect(() => {
// //     const totalTime = parseFloat(formData.hpsTime) + parseFloat(formData.serviceTime);
// //     const n2Time = totalTime - parseFloat(formData.hpsTime) - parseFloat(formData.serviceTime);

// //     setFormData(prevData => ({
// //       ...prevData,
// //       totalTime,
// //       n2Time,
// //       platenTemp: formData.treadCompound === 'Compound X' ? 145 : 150,
// //       jacketTemp: formData.treadCompound === 'Compound X' ? 140 : 135
// //     }));
// //   }, [formData.hpsTime, formData.serviceTime, formData.treadCompound]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   return (
// //     <div className="container">
// //       <div className="row">
// //         {/* Left Table */}
// //         <div className="col-md-6">
// //           <h2>EXISTING & NEW SIZES</h2>
// //           <table className="table table-bordered">
// //             <tbody>
// //               <tr>
// //                 <td>Tyre Size</td>
// //                 <td><input className="form-control" name="tyreSize" value={formData.tyreSize} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Tyre Pattern</td>
// //                 <td>
// //                   <select className="form-control" name="tyrePattern" value={formData.tyrePattern} onChange={handleChange}>
// //                     {tyrePatternOptions.map(option => (
// //                       <option key={option} value={option}>{option}</option>
// //                     ))}
// //                   </select>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td>Tyre Weight</td>
// //                 <td><input className="form-control" name="tyreWeight" value={formData.tyreWeight} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Tyre Construction</td>
// //                 <td><input className="form-control" name="tyreConstruction" value={formData.tyreConstruction} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Total Guage @ C/L</td>
// //                 <td><input className="form-control" name="totalGuageCL" value={formData.totalGuageCL} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Rubber Guage @ C/L</td>
// //                 <td><input className="form-control" name="rubberGuageCL" value={formData.rubberGuageCL} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Under Tread</td>
// //                 <td><input className="form-control" name="underTread" value={formData.underTread} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Total Guage @ Shoulder</td>
// //                 <td><input className="form-control" name="totalGuageShoulder" value={formData.totalGuageShoulder} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Rubber Guage @ Shoulder</td>
// //                 <td><input className="form-control" name="rubberGuageShoulder" value={formData.rubberGuageShoulder} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Bladder Thickness</td>
// //                 <td><input className="form-control" name="bladderThickness" value={formData.bladderThickness} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Press Number</td>
// //                 <td><input className="form-control" name="pressNumber" value={formData.pressNumber} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Mold No</td>
// //                 <td><input className="form-control" name="moldNo" value={formData.moldNo} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Tread Compound</td>
// //                 <td>
// //                   <select className="form-control" name="treadCompound" value={formData.treadCompound} onChange={handleChange}>
// //                     {treadCompoundOptions.map(option => (
// //                       <option key={option} value={option}>{option}</option>
// //                     ))}
// //                   </select>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td>IL Compound</td>
// //                 <td>
// //                   <select className="form-control" name="ilCompound" value={formData.ilCompound} onChange={handleChange}>
// //                     {ilCompoundOptions.map(option => (
// //                       <option key={option} value={option}>{option}</option>
// //                     ))}
// //                   </select>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td>SW Compound</td>
// //                 <td>
// //                   <select className="form-control" name="swCompound" value={formData.swCompound} onChange={handleChange}>
// //                     {swCompoundOptions.map(option => (
// //                       <option key={option} value={option}>{option}</option>
// //                     ))}
// //                   </select>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td>Belt Edge Compound</td>
// //                 <td>
// //                   <select className="form-control" name="beltEdgeCompound" value={formData.beltEdgeCompound} onChange={handleChange}>
// //                     {beltEdgeCompoundOptions.map(option => (
// //                       <option key={option} value={option}>{option}</option>
// //                     ))}
// //                   </select>
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Right Table */}
// //         <div className="col-md-6">
// //           <h2>Curing Time Prediction</h2>
// //           <table className="table table-bordered">
// //             <tbody>
// //               <tr>
// //                 <td>HPS Time</td>
// //                 <td><input className="form-control" name="hpsTime" value={formData.hpsTime} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>N2 Time</td>
// //                 <td>{formData.n2Time}</td>
// //               </tr>
// //               <tr>
// //                 <td>Service Time</td>
// //                 <td><input className="form-control" name="serviceTime" value={formData.serviceTime} onChange={handleChange} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Total Time</td>
// //                 <td>{formData.totalTime}</td>
// //               </tr>
// //               <tr>
// //                 <td>Platen Temp</td>
// //                 <td>{formData.platenTemp}</td>
// //               </tr>
// //               <tr>
// //                 <td>Jacket Temp</td>
// //                 <td>{formData.jacketTemp}</td>
// //               </tr>
// //               <tr>
// //                 <td>Blow Point Time</td>
// //                 <td><input className="form-control" name="blowPointTime" value={formData.blowPointTime} onChange={handleChange} /></td>
// //               </tr>
// //               {/* Other fields */}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //       {/* <div className="text-success mt-3">Prediction Completed.</div> */}
// //     </div>
// //   );
// // };

// // export default TyrePrediction;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './TyrePrediction.css'; // Import the CSS file

// const TyrePrediction = () => {
//   const tyrePatternOptions = ['Pattern A', 'Pattern B', 'Pattern C'];
//   const treadCompoundOptions = ['Compound X', 'Compound Y', 'Compound Z'];
//   const ilCompoundOptions = ['IL 1', 'IL 2', 'IL 3'];
//   const swCompoundOptions = ['SW 1', 'SW 2', 'SW 3'];
//   const beltEdgeCompoundOptions = ['Belt A', 'Belt B', 'Belt C'];

//   const [formData, setFormData] = useState({
//     tyreSize: '',
//     tyrePattern: tyrePatternOptions[0],
//     tyreWeight: '',
//     tyreConstruction: '',
//     totalGuageCL: '',
//     rubberGuageCL: '',
//     underTread: '',
//     totalGuageShoulder: '',
//     rubberGuageShoulder: '',
//     bladderThickness: '',
//     pressNumber: '',
//     moldNo: '',
//     treadCompound: treadCompoundOptions[0],
//     ilCompound: ilCompoundOptions[0],
//     swCompound: swCompoundOptions[0],
//     beltEdgeCompound: beltEdgeCompoundOptions[0],
//     hpsTime: 8,
//     n2Time: '',
//     serviceTime: 0.7,
//     totalTime: '',
//     platenTemp: 145,
//     jacketTemp: 140,
//     blowPointTime: '',
//   });

//   useEffect(() => {
//     const totalTime = parseFloat(formData.hpsTime) + parseFloat(formData.serviceTime);
//     const n2Time = totalTime - parseFloat(formData.hpsTime) - parseFloat(formData.serviceTime);

//     setFormData(prevData => ({
//       ...prevData,
//       totalTime,
//       n2Time,
//       platenTemp: formData.treadCompound === 'Compound X' ? 145 : 150,
//       jacketTemp: formData.treadCompound === 'Compound X' ? 140 : 135
//     }));
//   }, [formData.hpsTime, formData.serviceTime, formData.treadCompound]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {/* Left Table */}
//         <div className="col-md-6">
//           <h2 className="header">EXISTING & NEW SIZES</h2>
//           <div className="table-container">
//             <table className="table table-bordered">
//               <tbody>
//                 <tr>
//                   <td>Tyre Size</td>
//                   <td><input className="form-control" name="tyreSize" value={formData.tyreSize} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Tyre Pattern</td>
//                   <td>
//                     <select className="form-control" name="tyrePattern" value={formData.tyrePattern} onChange={handleChange}>
//                       {tyrePatternOptions.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Tyre Weight</td>
//                   <td><input className="form-control" name="tyreWeight" value={formData.tyreWeight} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Tyre Construction</td>
//                   <td><input className="form-control" name="tyreConstruction" value={formData.tyreConstruction} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Total Guage @ C/L</td>
//                   <td><input className="form-control" name="totalGuageCL" value={formData.totalGuageCL} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Rubber Guage @ C/L</td>
//                   <td><input className="form-control" name="rubberGuageCL" value={formData.rubberGuageCL} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Under Tread</td>
//                   <td><input className="form-control" name="underTread" value={formData.underTread} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Total Guage @ Shoulder</td>
//                   <td><input className="form-control" name="totalGuageShoulder" value={formData.totalGuageShoulder} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Rubber Guage @ Shoulder</td>
//                   <td><input className="form-control" name="rubberGuageShoulder" value={formData.rubberGuageShoulder} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Bladder Thickness</td>
//                   <td><input className="form-control" name="bladderThickness" value={formData.bladderThickness} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Press Number</td>
//                   <td><input className="form-control" name="pressNumber" value={formData.pressNumber} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Mold No</td>
//                   <td><input className="form-control" name="moldNo" value={formData.moldNo} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Tread Compound</td>
//                   <td>
//                     <select className="form-control" name="treadCompound" value={formData.treadCompound} onChange={handleChange}>
//                       {treadCompoundOptions.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>IL Compound</td>
//                   <td>
//                     <select className="form-control" name="ilCompound" value={formData.ilCompound} onChange={handleChange}>
//                       {ilCompoundOptions.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>SW Compound</td>
//                   <td>
//                     <select className="form-control" name="swCompound" value={formData.swCompound} onChange={handleChange}>
//                       {swCompoundOptions.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Belt Edge Compound</td>
//                   <td>
//                     <select className="form-control" name="beltEdgeCompound" value={formData.beltEdgeCompound} onChange={handleChange}>
//                       {beltEdgeCompoundOptions.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Right Table */}
//         <div className="col-md-6" style={{marginTop:"100px"}}>
//           <h2 className="header">Curing Time Prediction</h2>
//           <div className="table-container2">
//             <table className="table table-bordered">
//               <tbody>
//                 <tr>
//                   <td>HPS Time</td>
//                   <td><input className="form-control" name="hpsTime" value={formData.hpsTime} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>N2 Time</td>
//                   <td>{formData.n2Time}</td>
//                 </tr>
//                 <tr>
//                   <td>Service Time</td>
//                   <td><input className="form-control" name="serviceTime" value={formData.serviceTime} onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Total Time</td>
//                   <td>{formData.totalTime}</td>
//                 </tr>
//                 <tr>
//                   <td>Platen Temp</td>
//                   <td>{formData.platenTemp}</td>
//                 </tr>
//                 <tr>
//                   <td>Jacket Temp</td>
//                   <td>{formData.jacketTemp}</td>
//                 </tr>
//                 <tr>
//                   <td>Blow Point Time</td>
//                   <td><input className="form-control" name="blowPointTime" value={formData.blowPointTime} onChange={handleChange} /></td>
//                 </tr>
//                 {/* Other fields */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {/* <div className="text-success mt-3">Prediction Completed.</div> */}
//     </div>
//   );
// };

// export default TyrePrediction;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TyrePrediction.css'; // Import the CSS file

const TyrePrediction = () => {
  const tyrePatternOptions = ['Pattern A', 'Pattern B', 'Pattern C'];
  const treadCompoundOptions = ['Compound X', 'Compound Y', 'Compound Z'];
  const ilCompoundOptions = ['IL 1', 'IL 2', 'IL 3'];
  const swCompoundOptions = ['SW 1', 'SW 2', 'SW 3'];
  const beltEdgeCompoundOptions = ['Belt A', 'Belt B', 'Belt C'];

  const [formData, setFormData] = useState({
    tyreSize: '',
    tyrePattern: tyrePatternOptions[0],
    tyreWeight: '',
    tyreConstruction: '',
    totalGuageCL: '',
    rubberGuageCL: '',
    underTread: '',
    totalGuageShoulder: '',
    rubberGuageShoulder: '',
    bladderThickness: '',
    pressNumber: '',
    moldNo: '',
    treadCompound: treadCompoundOptions[0],
    ilCompound: ilCompoundOptions[0],
    swCompound: swCompoundOptions[0],
    beltEdgeCompound: beltEdgeCompoundOptions[0],
    hpsTime: 8,
    n2Time: '',
    serviceTime: 0.7,
    totalTime: '',
    platenTemp: 145,
    jacketTemp: 140,
    blowPointTime: '',
  });

  useEffect(() => {
    const totalTime = parseFloat(formData.hpsTime) + parseFloat(formData.serviceTime);
    // const n2Time = totalTime - parseFloat(formData.hpsTime) - parseFloat(formData.serviceTime);
    const n2Time = totalTime 


    setFormData(prevData => ({
      ...prevData,
      totalTime,
      n2Time,
      platenTemp: formData.treadCompound === 'Compound X' ? 145 : 150,
      jacketTemp: formData.treadCompound === 'Compound X' ? 140 : 135
    }));
  }, [formData.hpsTime, formData.serviceTime, formData.treadCompound]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Table */}
        <div className="col-md-6">
          <h2 className="header">EXISTING & NEW SIZES</h2>
          <div className="table-container">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Tyre Size</td>
                  <td><input className="form-control" name="tyreSize" value={formData.tyreSize} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Tyre Pattern</td>
                  <td>
                    <select className="form-control" name="tyrePattern" value={formData.tyrePattern} onChange={handleChange}>
                      {tyrePatternOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Tyre Weight</td>
                  <td><input className="form-control" name="tyreWeight" value={formData.tyreWeight} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Tyre Construction</td>
                  <td><input className="form-control" name="tyreConstruction" value={formData.tyreConstruction} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Total Guage @ C/L</td>
                  <td><input className="form-control" name="totalGuageCL" value={formData.totalGuageCL} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Rubber Guage @ C/L</td>
                  <td><input className="form-control" name="rubberGuageCL" value={formData.rubberGuageCL} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Under Tread</td>
                  <td><input className="form-control" name="underTread" value={formData.underTread} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Total Guage @ Shoulder</td>
                  <td><input className="form-control" name="totalGuageShoulder" value={formData.totalGuageShoulder} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Rubber Guage @ Shoulder</td>
                  <td><input className="form-control" name="rubberGuageShoulder" value={formData.rubberGuageShoulder} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Bladder Thickness</td>
                  <td><input className="form-control" name="bladderThickness" value={formData.bladderThickness} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Press Number</td>
                  <td><input className="form-control" name="pressNumber" value={formData.pressNumber} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Mold No</td>
                  <td><input className="form-control" name="moldNo" value={formData.moldNo} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Tread Compound</td>
                  <td>
                    <select className="form-control" name="treadCompound" value={formData.treadCompound} onChange={handleChange}>
                      {treadCompoundOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>IL Compound</td>
                  <td>
                    <select className="form-control" name="ilCompound" value={formData.ilCompound} onChange={handleChange}>
                      {ilCompoundOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>SW Compound</td>
                  <td>
                    <select className="form-control" name="swCompound" value={formData.swCompound} onChange={handleChange}>
                      {swCompoundOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Belt Edge Compound</td>
                  <td>
                    <select className="form-control" name="beltEdgeCompound" value={formData.beltEdgeCompound} onChange={handleChange}>
                      {beltEdgeCompoundOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Table */}
        <div className="col-md-6" style={{marginTop:"100px"}}>
          <h2 className="header">Curing Time Prediction</h2>
          <div className="table-container">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>HPS Time</td>
                  <td><input className="form-control" name="hpsTime" value={formData.hpsTime} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>N2 Time</td>
                  <td>{formData.n2Time}</td>
                </tr>
                <tr>
                  <td>Service Time</td>
                  <td><input className="form-control" name="serviceTime" value={formData.serviceTime} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>Total Time</td>
                  <td>{formData.totalTime}</td>
                </tr>
                <tr>
                  <td>Platen Temp</td>
                  <td>{formData.platenTemp}</td>
                </tr>
                <tr>
                  <td>Jacket Temp</td>
                  <td>{formData.jacketTemp}</td>
                </tr>
                <tr>
                  <td>Blow Point Time</td>
                  <td><input className="form-control" name="blowPointTime" value={formData.blowPointTime} onChange={handleChange} /></td>
                </tr>
                {/* Other fields */}
              </tbody>
            </table>
            <button className="btn btn-primary mt-3 w-100" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      {/* <div className="text-success mt-3">Prediction Completed.</div> */}
    </div>
  );
};

export default TyrePrediction;
