import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryDoctors = () => {
    // const [category,setDoectors]=useState([])
    // useEffect(()=>{
    //     fetch('https://al-shifa-hospital-server-mirza2018s-projects.vercel.app/doctors')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setDoectors(data)
    //     })
    // },[])
    return (
      <div>
        <h1 className='text-center text-5xl font-bold mt-4 text-black dark:text-white pb-20'>Our Departments</h1>

        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-20'>


 <Link to="/doctors/1">   
<div className="card bg-base-100 image-full w-56 shadow-xl">
  <figure>
    <img
      src="https://www.shutterstock.com/image-vector/statoscope-pulse-heart-shape-concept-600nw-2195001157.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center my-auto">
    <p className='font-bold text-2xl'>CARDIOLOGY</p>
  </div>
</div>
</Link>
 <Link to="/doctors/2">   
<div className="card bg-base-100 image-full w-56 shadow-xl">
  <figure>
    <img
      src="https://static.vecteezy.com/system/resources/previews/016/223/367/original/human-heart-logo-medical-cardiology-icon-illustration-vector.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center my-auto">
    <p className='font-bold text-2xl'>CARDIOLOGY</p>
  </div>
</div>
</Link>




 <Link to="/doctors/3">   
<div className="card bg-base-100 image-full w-56 shadow-xl">
  <figure>
    <img
      src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-dental-logo-design-creative-dentist-logo-dental-clinic-creative-company-png-image_4817208.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center my-auto">
    <p className='font-bold text-2xl'>DENTAL</p>
  </div>
</div>
</Link>


 <Link to="/doctors/4">   
<div className="card bg-base-100 image-full w-56 shadow-xl">
  <figure>
    <img
      src="https://ih1.redbubble.net/image.169665867.1043/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center my-auto">
    <p className='font-bold text-2xl'>ORTHOPAEDICS</p>
  </div>
</div>
</Link>




 <Link to="/doctors/5">   
<div className="card bg-base-100 image-full w-56 shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/premium-vector/joint-bones-vector-logo-design-orthopedic-clinics_833786-940.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center my-auto">
    <p className='font-bold text-2xl'>ORTHOPAEDICS</p>
  </div>
</div>
</Link>



        </div>
        </div>

    );
};

export default CategoryDoctors;