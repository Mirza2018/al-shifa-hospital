
import { useLoaderData } from "react-router-dom";
import Doctor from "./Doctor";

const Doctors = () => {
    const loadDoctors = useLoaderData();


    return (
        <div>

            <h1 className="text-center text-5xl font-bold mt-4 text-lime-500">Take a Appoinment</h1>
            {
                loadDoctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
            }

        </div >
    );
};

export default Doctors;