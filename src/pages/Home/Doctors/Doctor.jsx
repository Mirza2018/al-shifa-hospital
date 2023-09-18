import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
    const { category, name, consultants, degree, img,_id } = doctor;
    return (
        <center>
            <div className="card w-96 bg-base-100 shadow-xl my-4">
                <figure className="px-10 pt-10">
                    <img src={img} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{consultants}</p>
                    <p>{degree}</p>
                    <div className="card-actions">
                        <Link to={`/appointmentdetails/${_id}`}><button className="btn btn-primary">Appointment</button></Link>
                        
                    </div>
                </div>
            </div>
        </center>
    );
};

export default Doctor;