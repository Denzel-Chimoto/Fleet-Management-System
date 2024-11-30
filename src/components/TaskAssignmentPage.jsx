import React from 'react'
import Logo from './Logo'
import DropDown from './DropDown'

const TaskAssignmentPage = () => {
    return (
        <div>
            <div>
                <form action="POST">
                    <div className='mb-3'>
                        <Logo />
                    </div>
                    <div>
                        <label class="form-label" for="email">Task Description</label>
                        <input type='email' class="form-control" name="email"/>
                    </div>
                    <div>
                        <label class="form-label" for="password">Location</label>
                        <input class="form-control" name="password"/>
                    </div>
                    <div>
                        <label class="form-label" for="password">Deadline</label>
                        <input class="form-control" name="password"/>
                    </div>
                    <div class="mb-3">
                        <DropDown heading="Assign To Driver" value1="Chimoto" value2="Mutenje"/>
                        <DropDown heading="Status" value1="Pending" value2="In-Progress"/>  
                    </div>          
                    <input class="btn btn-primary" type="submit" />
                </form>

            </div>
            <div>
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
                        <th>Task ID</th>
                        <th>Description</th>
                        <th>Driver</th>
                        <th>Status</th>
                        <th>Deadline</th>
                        <th>Quick Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{1}</td>
                        <td>D008</td>
                        <td>Excavation in Chitungwiza</td>
                        <td>Chimoto</td>
                        <td>In-Progress</td>
                        <td>1600hrs</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm m-3"
                                onClick={() => {}}>Edit
                            </button>
                            <button
                                 className="btn btn-warning btn-sm m-3">Delete
                            </button>
                            <button
                                className="btn btn-danger btn-sm m-3"
                                onClick={() => {}}>Update Status
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            </div>
        </div>
        
        
      )
}

export default TaskAssignmentPage
