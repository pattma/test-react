import { useState } from "react";

const Admin = ({ employees, onAddEmployee, onDeleteEmployee }) => {

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        lastname: '',
        position: ''
    });
    
    // update new employee state when inputs change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };
    
    // Add a new employee to the employee list
    const addEmployee = () => {
        // Create new employee object
        const employeeToAdd = {
            id: employees.length + 1,
            ...newEmployee
        };
        // Call the onAddEmployee prop to update the state in Home
        onAddEmployee(employeeToAdd);
    
        // Clear new employee state
        setNewEmployee({
            name: '',
            lastname: '',
            position: ''
        });
    };
    
    // Delete an employee from the employee list
    const deleteEmployee = (id) => {
        // Call the onDeleteEmployee prop to update the state in Home
        onDeleteEmployee(id);
    };

    return (
    <>
        <div>
            <h3>Create User Here</h3>
            <input type="text" name="name" placeholder="Name" value={newEmployee.name} onChange={handleInputChange} style={{ margin: "4px" }} />
            <input type="text" name="lastname" placeholder="Last Name" value={newEmployee.lastname} onChange={handleInputChange} style={{ margin: "4px" }} />
            <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleInputChange} style={{ margin: "4px" }} />
            <button style={{ margin: "4px" }} onClick={addEmployee}>Save</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                            <td>
                                <button style={{ color: "red", border: "none", backgroundColor: "inherit", cursor: "pointer"}} onClick={() => deleteEmployee(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
};

export default Admin;