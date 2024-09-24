// // // // import React, { useState } from 'react';
// // // // import "./Settings.css";

// // // // const Settings = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     tyreSize: '',
// // // //     hpsTime: '',
// // // //     blowPointTime: '',
// // // //     cureMedia: '',
// // // //     platenTemp: '',
// // // //     jacketTemp: '',
// // // //     cureCycleTime: '',
// // // //     lowerBeltEdge1: '',
// // // //     upperBeltEdge1: '',
// // // //     lowerBeltEdge2: '',
// // // //     upperBeltEdge2: '',
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({ ...formData, [name]: value });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     // Handle form submission logic here
// // // //     console.log('Form submitted:', formData);
// // // //   };

// // // //   return (
// // // //     <div className="container mt-4">
// // // //       <h2 style={{ textAlign: "center", color: "blueviolet" }} className='Mainheader'>
// // // //         Temperature Profile of TC Junction Dashboard
// // // //       </h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div className="row g-3">
// // // //           <div className="col-md-4">
// // // //             <div className="form-group">
// // // //               <label htmlFor="tyreSize">Tyre Size</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Tyre Size"
// // // //                 name="tyreSize"
// // // //                 value={formData.tyreSize}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="col-md-4">
// // // //             <div className="form-group">
// // // //               <label htmlFor="hpsTime">HPS Time</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="HPS Time"
// // // //                 name="hpsTime"
// // // //                 value={formData.hpsTime}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="col-md-4">
// // // //             <div className="form-group">
// // // //               <label htmlFor="blowPointTime">Blow Point Time</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Blow Point Time"
// // // //                 name="blowPointTime"
// // // //                 value={formData.blowPointTime}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="row g-3">
// // // //           <div className="col-md-4">
// // // //             <div className="form-group">
// // // //               <label htmlFor="cureMedia">Cure Media</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Cure Media"
// // // //                 name="cureMedia"
// // // //                 value={formData.cureMedia}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="col-md-4">
// // // //             <div className="form-group">
// // // //               <label htmlFor="platenTemp">Platen Temp</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Platen Temp"
// // // //                 name="platenTemp"
// // // //                 value={formData.platenTemp}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="col-md-4">
// // // //             <div className="form-group">
// // // //               <label htmlFor="jacketTemp">Jacket Temp</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Jacket Temp"
// // // //                 name="jacketTemp"
// // // //                 value={formData.jacketTemp}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="row g-3">
// // // //           <div className="col-md-4">
// // // //             <div className="form-group">
// // // //               <label htmlFor="cureCycleTime">Cure Cycle Time</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Cure Cycle Time"
// // // //                 name="cureCycleTime"
// // // //                 value={formData.cureCycleTime}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="row mt-4">
// // // //           <div className="col-md-6">
// // // //             <h4 className="header-t" style={{ margin: "60px" }}>Time VS Temperature</h4>
// // // //           </div>
// // // //           <div className="col-md-6">
// // // //             <div className="row g-3">
// // // //               <div className="col-md-6">
// // // //                 <div className="form-group">
// // // //                   <label htmlFor="lowerBeltEdge1">Lower Belt Edge1</label>
// // // //                   <select
// // // //                     className="form-control"
// // // //                     name="lowerBeltEdge1"
// // // //                     value={formData.lowerBeltEdge1}
// // // //                     onChange={handleChange}
// // // //                   >
// // // //                     <option value="">Select</option>
// // // //                     <option value="option1">Option 1</option>
// // // //                     <option value="option2">Option 2</option>
// // // //                     <option value="option3">Option 3</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="col-md-6">
// // // //                 <div className="form-group">
// // // //                   <label htmlFor="upperBeltEdge1">Upper Belt Edge1</label>
// // // //                   <select
// // // //                     className="form-control"
// // // //                     name="upperBeltEdge1"
// // // //                     value={formData.upperBeltEdge1}
// // // //                     onChange={handleChange}
// // // //                   >
// // // //                     <option value="">Select</option>
// // // //                     <option value="option1">Option 1</option>
// // // //                     <option value="option2">Option 2</option>
// // // //                     <option value="option3">Option 3</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="row g-3">
// // // //               <div className="col-md-6">
// // // //                 <div className="form-group">
// // // //                   <label htmlFor="lowerBeltEdge2">Lower Belt Edge2</label>
// // // //                   <select
// // // //                     className="form-control"
// // // //                     name="lowerBeltEdge2"
// // // //                     value={formData.lowerBeltEdge2}
// // // //                     onChange={handleChange}
// // // //                   >
// // // //                     <option value="">Select</option>
// // // //                     <option value="option1">Option 1</option>
// // // //                     <option value="option2">Option 2</option>
// // // //                     <option value="option3">Option 3</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="col-md-6">
// // // //                 <div className="form-group">
// // // //                   <label htmlFor="upperBeltEdge2">Upper Belt Edge2</label>
// // // //                   <select
// // // //                     className="form-control"
// // // //                     name="upperBeltEdge2"
// // // //                     value={formData.upperBeltEdge2}
// // // //                     onChange={handleChange}
// // // //                   >
// // // //                     <option value="">Select</option>
// // // //                     <option value="option1">Option 1</option>
// // // //                     <option value="option2">Option 2</option>
// // // //                     <option value="option3">Option 3</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* <button type="submit" className="btn btn-primary mt-3">Submit</button> */}
// // // //       </form>

// // // //       <div className="row mt-4">
// // // //         <div className="col-md-6">
// // // //           <h4>Sample Table</h4>
// // // //           <table className="table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Header 1</th>
// // // //                 <th>Header 2</th>
// // // //                 <th>Header 3</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               <tr>
// // // //                 <td>Data 1</td>
// // // //                 <td>Data 2</td>
// // // //                 <td>Data 3</td>
// // // //               </tr>
// // // //               <tr>
// // // //                 <td>Data 4</td>
// // // //                 <td>Data 5</td>
// // // //                 <td>Data 6</td>
// // // //               </tr>
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //         <div className="col-md-6">
// // // //           <h4>Sample Graph</h4>
// // // //           <div style={{ height: "300px", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center" }}>
// // // //             {/* Placeholder for the graph */}
// // // //             <p>Graph Placeholder</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Settings;

// // // import React, { useState } from 'react';
// // // import "./Settings.css";

// // // const Settings = () => {
// // //   const [formData, setFormData] = useState({
// // //     tyreSize: '',
// // //     hpsTime: '',
// // //     blowPointTime: '',
// // //     cureMedia: '',
// // //     platenTemp: '',
// // //     jacketTemp: '',
// // //     cureCycleTime: '',
// // //     lowerBeltEdge1: '',
// // //     upperBeltEdge1: '',
// // //     lowerBeltEdge2: '',
// // //     upperBeltEdge2: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Handle form submission logic here
// // //     console.log('Form submitted:', formData);
// // //   };

// // //   return (
// // //     <div className="container mt-4">
// // //       <h2 style={{ textAlign: "center", color: "blueviolet" }} className='Mainheader'>
// // //         Temperature Profile of TC Junction Dashboard
// // //       </h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="row g-3">
// // //           <div className="col-md-4">
// // //             <div className="form-group">
// // //               <label htmlFor="tyreSize">Tyre Size</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="Tyre Size"
// // //                 name="tyreSize"
// // //                 value={formData.tyreSize}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="col-md-4">
// // //             <div className="form-group">
// // //               <label htmlFor="hpsTime">HPS Time</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="HPS Time"
// // //                 name="hpsTime"
// // //                 value={formData.hpsTime}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="col-md-4">
// // //             <div className="form-group">
// // //               <label htmlFor="blowPointTime">Blow Point Time</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="Blow Point Time"
// // //                 name="blowPointTime"
// // //                 value={formData.blowPointTime}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="row g-3">
// // //           <div className="col-md-4">
// // //             <div className="form-group">
// // //               <label htmlFor="cureMedia">Cure Media</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="Cure Media"
// // //                 name="cureMedia"
// // //                 value={formData.cureMedia}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="col-md-4">
// // //             <div className="form-group">
// // //               <label htmlFor="platenTemp">Platen Temp</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="Platen Temp"
// // //                 name="platenTemp"
// // //                 value={formData.platenTemp}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="col-md-4">
// // //             <div className="form-group">
// // //               <label htmlFor="jacketTemp">Jacket Temp</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="Jacket Temp"
// // //                 name="jacketTemp"
// // //                 value={formData.jacketTemp}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="row g-3">
// // //           <div className="col-md-4">
// // //             <div className="form-group">
// // //               <label htmlFor="cureCycleTime">Cure Cycle Time</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="Cure Cycle Time"
// // //                 name="cureCycleTime"
// // //                 value={formData.cureCycleTime}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="row mt-4">
// // //           <div className="col-md-6">
// // //             <h4 className="header-t" style={{ margin: "60px" }}>Time VS Temperature</h4>
// // //           </div>
// // //           <div className="col-md-6">
// // //             <div className="row g-3">
// // //               <div className="col-md-6">
// // //                 <div className="form-group">
// // //                   <label htmlFor="lowerBeltEdge1">Lower Belt Edge1</label>
// // //                   <select
// // //                     className="form-control"
// // //                     name="lowerBeltEdge1"
// // //                     value={formData.lowerBeltEdge1}
// // //                     onChange={handleChange}
// // //                   >
// // //                     <option value="">Select</option>
// // //                     <option value="option1">Option 1</option>
// // //                     <option value="option2">Option 2</option>
// // //                     <option value="option3">Option 3</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //               <div className="col-md-6">
// // //                 <div className="form-group">
// // //                   <label htmlFor="upperBeltEdge1">Upper Belt Edge1</label>
// // //                   <select
// // //                     className="form-control"
// // //                     name="upperBeltEdge1"
// // //                     value={formData.upperBeltEdge1}
// // //                     onChange={handleChange}
// // //                   >
// // //                     <option value="">Select</option>
// // //                     <option value="option1">Option 1</option>
// // //                     <option value="option2">Option 2</option>
// // //                     <option value="option3">Option 3</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="row g-3">
// // //               <div className="col-md-6">
// // //                 <div className="form-group">
// // //                   <label htmlFor="lowerBeltEdge2">Lower Belt Edge2</label>
// // //                   <select
// // //                     className="form-control"
// // //                     name="lowerBeltEdge2"
// // //                     value={formData.lowerBeltEdge2}
// // //                     onChange={handleChange}
// // //                   >
// // //                     <option value="">Select</option>
// // //                     <option value="option1">Option 1</option>
// // //                     <option value="option2">Option 2</option>
// // //                     <option value="option3">Option 3</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //               <div className="col-md-6">
// // //                 <div className="form-group">
// // //                   <label htmlFor="upperBeltEdge2">Upper Belt Edge2</label>
// // //                   <select
// // //                     className="form-control"
// // //                     name="upperBeltEdge2"
// // //                     value={formData.upperBeltEdge2}
// // //                     onChange={handleChange}
// // //                   >
// // //                     <option value="">Select</option>
// // //                     <option value="option1">Option 1</option>
// // //                     <option value="option2">Option 2</option>
// // //                     <option value="option3">Option 3</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* <button type="submit" className="btn btn-primary mt-3">Submit</button> */}
// // //       </form>

// // //       <div className="row mt-4">
// // //         <div className="col-md-6">
// // //           <h4>Sample Table</h4>
// // //           <table className="table">
// // //             <thead>
// // //               <tr>
// // //                 <th>Header 1</th>
// // //                 <th>Header 2</th>
// // //                 <th>Header 3</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr>
// // //                 <td>Data 1</td>
// // //                 <td>Data 2</td>
// // //                 <td>Data 3</td>
// // //               </tr>
// // //               <tr>
// // //                 <td>Data 4</td>
// // //                 <td>Data 5</td>
// // //                 <td>Data 6</td>
// // //               </tr>
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //         <div className="col-md-6">
// // //           <h4>Sample Graph</h4>
// // //           <div style={{ height: "300px", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center" }}>
// // //             {/* Placeholder for the graph */}
// // //             <p>Graph Placeholder</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Settings;


import React, { useState } from 'react';
import "./Settings.css";

const Settings = () => {
  const [formData, setFormData] = useState({
    tyreSize: '',
    hpsTime: '',
    blowPointTime: '',
    cureMedia: '',
    platenTemp: '',
    jacketTemp: '',
    cureCycleTime: '',
    lowerBeltEdge1: '',
    upperBeltEdge1: '',
    lowerBeltEdge2: '',
    upperBeltEdge2: '',
  });

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
    <div className="container mt-4">
      <h2 style={{ textAlign: "center", color: "blueviolet" }} className='Mainheader'>
        Temperature Profile of TC Junction Dashboard
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="tyreSize">Tyre Size</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tyre Size"
                name="tyreSize"
                value={formData.tyreSize}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="hpsTime">HPS Time</label>
              <input
                type="text"
                className="form-control"
                placeholder="HPS Time"
                name="hpsTime"
                value={formData.hpsTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="blowPointTime">Blow Point Time</label>
              <input
                type="text"
                className="form-control"
                placeholder="Blow Point Time"
                name="blowPointTime"
                value={formData.blowPointTime}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="cureMedia">Cure Media</label>
              <input
                type="text"
                className="form-control"
                placeholder="Cure Media"
                name="cureMedia"
                value={formData.cureMedia}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="platenTemp">Platen Temp</label>
              <input
                type="text"
                className="form-control"
                placeholder="Platen Temp"
                name="platenTemp"
                value={formData.platenTemp}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="jacketTemp">Jacket Temp</label>
              <input
                type="text"
                className="form-control"
                placeholder="Jacket Temp"
                name="jacketTemp"
                value={formData.jacketTemp}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="cureCycleTime">Cure Cycle Time</label>
              <input
                type="text"
                className="form-control"
                placeholder="Cure Cycle Time"
                name="cureCycleTime"
                value={formData.cureCycleTime}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="header-t" style={{ margin: "60px" }}>Time VS Temperature</h4>
          </div>
          <div className="col-md-6">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lowerBeltEdge1">Lower Belt Edge1</label>
                  <select
                    className="form-control"
                    name="lowerBeltEdge1"
                    value={formData.lowerBeltEdge1}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="upperBeltEdge1">Upper Belt Edge1</label>
                  <select
                    className="form-control"
                    name="upperBeltEdge1"
                    value={formData.upperBeltEdge1}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lowerBeltEdge2">Lower Belt Edge2</label>
                  <select
                    className="form-control"
                    name="lowerBeltEdge2"
                    value={formData.lowerBeltEdge2}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="upperBeltEdge2">Upper Belt Edge2</label>
                  <select
                    className="form-control"
                    name="upperBeltEdge2"
                    value={formData.upperBeltEdge2}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button type="submit" className="btn btn-primary mt-3">Submit</button> */}
      </form>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Sample Table</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              <tr>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h4>Sample Graph</h4>
          <div style={{ height: "300px", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Placeholder for the graph */}
            <p>Graph Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

