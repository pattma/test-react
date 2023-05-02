import Layout from './Layout'
import { useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Normal from "./Normal";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [sector, setSector] = useState("normal");
  const [employees, setEmployees] = useState(mockEmployees);

  const handleAddEmployee = (employeeToAdd) => {
    // Create new employee object
    employeeToAdd.id = employees.length + 1;
    // Add new employee to the state
    setEmployees([...employees, employeeToAdd]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  if (sector === "user") {
    return (
      <Layout>
        <h1>Generation Thailand <br />Home - User Sector</h1>
        <Normal setSector={setSector} />
        <User employees={employees} />
      </Layout>
    )
  } 
  
  else if (sector === "admin") {
    return (
      <Layout>
        <h1>Generation Thailand <br />Home - Admin Sector</h1>
        <Normal setSector={setSector} />
        <Admin employees={employees} onAddEmployee={handleAddEmployee} onDeleteEmployee={handleDeleteEmployee} />
      </Layout>
    )
  } 

  return (
    <Layout>
      <h1>Generation Thailand <br />React - Assesment</h1>
      <Normal setSector={setSector} />
    </Layout>
  )
}

export default Home