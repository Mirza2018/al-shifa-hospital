import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';
import Adata from './Adata';

const AppointData = () => {
  const { user } = useContext(AuthContex)
  const [details, setDetails] = useState([])

  const url = `https://al-shifa-hospital-server-1.onrender.com/appointmentData?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDetails(data)
      })
  }, [url])

  const handleUpdate = (id) => {
    fetch(`https://al-shifa-hospital-server-1.onrender.com/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ status: "confirm" })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaining = details.filter(d => d._id !== id)
          const update = details.find(d => d._id === id)
          update.status = "confirm"
          const final = [update, ...remaining];
          setDetails(final)
        }
      })
  }
  const handleDelete = (id) => {
    fetch(`https://al-shifa-hospital-server-1.onrender.com/delete/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount>0){
          const remaining = details.filter(d => d._id !== id)
          setDetails(remaining)
        }
      })

  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            details.map(detail => <Adata
              key={detail._id}
              detail={detail}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            ></Adata>)
          }

        </tbody>

      </table>
    </div>
  );
};

export default AppointData;