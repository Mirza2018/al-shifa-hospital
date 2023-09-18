import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryDoctors = () => {
    // const [category,setDoectors]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/doctors')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setDoectors(data)
    //     })
    // },[])
    return (

        <center>
            <Link to="/doctors/1">            <div className="grid w-[20vw] h-[18vh] rounded bg-primary text-primary-content place-content-center">ANESTHESIOLOGY</div>
</Link>
            <Link to="/doctors/2">            <div className="grid w-[20vw] h-[18vh]  rounded bg-accent text-accent-content place-content-center">CARDIOLOGY</div>
</Link>
            <Link to="/doctors/3">            <div className="grid w-[20vw] h-[18vh]  rounded bg-secondary text-secondary-content place-content-center">DENTAL</div>
</Link>
            <Link to="/doctors/4">            <div className="grid w-[20vw] h-[18vh]  rounded bg-primary text-primary-content place-content-center">GASTROENTEROLOGY</div>

</Link>
            <Link to="/doctors/5">            <div className="grid w-[20vw] h-[18vh]  rounded bg-accent text-accent-content place-content-center">ORTHOPAEDICS</div>
</Link>


        </center>


    );
};

export default CategoryDoctors;