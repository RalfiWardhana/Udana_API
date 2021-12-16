import logo from './logo.svg';
import './App.css';
import{Table,Container,Navbar} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [data,setData] =useState([])
  const getData = async () => {
    const datas = await axios.get("https://api.openbrewerydb.org/breweries")
    console.log(datas.data)
    setData(datas.data)   
  }
  useEffect(()=>{
    getData()
},[])
let i = 1
  return (
    <div className="App">
  
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>API Open Brewery db</Navbar.Brand>
        </Container>
      </Navbar>
    
      <Container className='mt-3'>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Postal Code</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dat)=>(
            <tr>
              <td>{i++}</td>
              <td>{dat.name}</td>
              <td>{dat.city}</td>
              <td>{dat.state}</td>
              <td>{dat.postal_code}</td>
              <td>{dat.country}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
