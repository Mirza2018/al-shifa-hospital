import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import Naver from "../Home/Navber/Naver";


const AppointmentDetails = () => {
    const { user } = useContext(AuthContex)
    const loadeDoctor = useLoaderData();
    const { category, name:nam, consultants, degree, img, _id } = loadeDoctor;

    const handleFrom = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const details = {
            name, email, date, time, doctorName: nam, img, consultants
        }
        console.log(details);
        fetch('http://localhost:5000/appointmentData', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }
    return (
        <div>
            <Naver></Naver>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleFrom}>
                            <div className="card-body">

                                <div className="flex gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' value={user?.email} required className="input input-bordered" />
                                    </div>

                                </div>

                                <div className="flex gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Doctor name</span>
                                        </label>
                                        <input type="text" value={nam} className="input input-bordered" required />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">consultants</span>
                                        </label>
                                        <input type="text" name='consultants' value={consultants} required className="input input-bordered" />
                                    </div>

                                </div>

                                <div className="flex gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" required name="date" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Time</span>
                                        </label>
                                        <input type="time" name="time" className="input input-bordered" />
                                    </div>
                                </div>




                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Fixed AppointMent</button>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
            </div></div>
    );
};

export default AppointmentDetails;