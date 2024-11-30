import React from 'react';
import Logo from './Logo';

//Don't forget to add a default status of idle when passing the form to the database
const AddVehicleForm = () => {
    return (
        <form action="POST">
          <div className='mb-3'>
            <Logo />
          </div>
          <div>
            <label class="form-label" for="email">Vehicle Type</label>
            <input type='text' class="form-control" name="email"/>
          </div>
          <div>
            <label class="form-label" for="password">Reg No</label>
            <input class="form-control" name="password"/>
          </div>
          <div class="mb-3">
            
            <label class="form-label" for="password">Assigned Driver</label>
            <input class="form-control" name="password"/>
          </div>
         
            <input class="btn btn-primary" type="submit" />
        </form>
      )
}

export default AddVehicleForm
