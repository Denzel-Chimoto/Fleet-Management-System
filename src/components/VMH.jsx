import React, { useEffect, useState } from 'react';
import axios from 'axios';



const VMH = () => {
  
    return (
      <div className="container mt-5">
        {/* Search Bar */}
        <div className="mb-3 flex">
            <div className='m-3'>
                <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={()=>{}}
            />
            </div>

          <div>
            <button className="btn btn-warning btn-sm">Add Vehicle</button>
          </div>
        </div>
  
        {/* Table */}
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Vehicle Type</th>
              <th>Reg No</th>
              <th>Status</th>
              <th>Location</th>
              <th>Quick Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{1}</td>
                <td>Truck</td>
                <td>AGE 4567</td>
                <td>Active</td>
                <td>Chitungwiza</td>
                <td>
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default VMH;