import React from 'react';

const Adata = ({ detail, handleUpdate,handleDelete }) => {
    const { name, email, date, time, doctorName, img, consultants, _id, status } = detail;
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{doctorName}</div>
                        <div className="text-sm opacity-50">{consultants}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{time}</button>
            </th>
            <th>
                {
                    status === "confirm" ? <span><button className='text-success'>Confirm</button></span> : <button onClick={() => handleUpdate(_id)} className="btn btn-ghost bg-warning btn-xs">Panding</button>
                }

            </th>
            <td>
                <button onClick={()=>handleDelete(_id)} className='text-red-700'>X</button>
            </td>
        </tr>
    );
};

export default Adata;