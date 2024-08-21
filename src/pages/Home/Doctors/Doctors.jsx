
import { useLoaderData } from "react-router-dom";
import Doctor from "./Doctor";

const Doctors = () => {
  

    const loadeDoctorPast = useLoaderData() ;
    const loadDoctors=[...loadeDoctorPast]


    return (
        <div>
 
            <h1 className="text-center text-5xl font-bold mt-4 text-lime-500">Take a Appoinment</h1>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {
                loadDoctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
            }
</div>
        </div >
    );
};

export default Doctors;