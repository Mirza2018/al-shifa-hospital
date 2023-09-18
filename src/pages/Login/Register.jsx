import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';

const Register = () => {
    const { register } = useContext(AuthContex)

    const handleFrom = e => {
        e.preventDefault()
        const password = e.target.password.value;
        const email = e.target.email.value;

        console.log(password, email);
        register(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <h1>REgister</h1>
                    <form onSubmit={handleFrom}>
                        <div className="card-body">

                            <div className="">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                                </div>




                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>


                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary">REgister</button>
                            </div>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    );
};


export default Register;