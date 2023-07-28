import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShowRecord() {
  const [data, setData] = useState([]);

  const getStudent = async () => {
    try {
      const response = await axios.get('http://localhost:3005/getRecord');
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudent()
  }, []);

  const handleDelete = async (id) => {
    try {
      const StudentDelete = await axios.delete(
        `http://localhost:3005/deleteRecord/${id}`
        
      );
      getStudent()
      console.log(StudentDelete);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleDelete();
  }, []);

  const handlefind = async (id) => {
    try {
      const findStudent = await axios.get(
        `http://localhost:3005/find/${id}`
        
      );
    
      console.log(findStudent);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">#id</th>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">DOB</th>
            <th scope="col">Gender</th>
            <th scope="col">Department</th>
            <th scope="col">email</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
           
            <tr key={index}>
                <th>{item.id}</th>
              <th>{item.firstName}</th>
              <th>{item.lastName}</th>
              <th>{item.DOB}</th>
              <th>{item.Gender}</th>
              <th>{item.Department}</th>
              <th>{item.email}</th>
              <th>{item.PhoneNumber}</th>
              <th>{item.Address}</th>
              <button className="btn1" onClick={() => handleDelete(item.id)}>
                    DELETE
                  </button>
                  <Link key={item.id} to={`/student/${item.id}`}><button className="btn1">
                    update
                  </button>
                  </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ShowRecord;
