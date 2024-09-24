// import React from 'react';

// const Help = () => {
//     return (
        
//     <div className="content">
//       <h1>Help</h1>
//       <p>Help content goes here.</p>
//     </div>
            
        
//     );
// };

// export default Help;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import document from "./images/document.png"
import community from "./images/community.png"
import quicktip from "./images/QuickTip.jpg"
 
const Help = () => {
  return (
    <div className="container mt-5">
      {/* Search Bar */}
      <div className="text-center">
        <h2>How can we help?</h2>
        <input
          type="text"
          className="form-control my-3 w-50 mx-auto"
          placeholder="Search our forums"
        />
        <button className="btn btn-dark">Search</button>
      </div>
 
      {/* Help Options */}
      <div className="row text-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <img
                  src={document}
                  alt="Read our docs"
                  style={{ width: '50px' }}
                />


              </div>
              <h5 className="card-title">Read our docs</h5>
              <p className="card-text">Learn how to set up and use Zendesk.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <img
                  src={community}

                  alt="Ask the community"
                  style={{ width: '40px' }}
                />
              </div>
              <h5 className="card-title">Ask the community</h5>
              <p className="card-text">Join customer service pros in community Q&A.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4"  >
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <img
                  src={quicktip}

                  alt="Share a tip"
                  style={{ width: '50px' }}
                />
              </div>
              <h5 className="card-title">Share a tip</h5>
              <p className="card-text">Help the community with tips and examples.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Help;