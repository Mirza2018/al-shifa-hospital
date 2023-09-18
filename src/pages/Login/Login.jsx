import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, googlePopUp } = useContext(AuthContex)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);
    const form = location.state?.from?.pathname || "/"

   
    const handleFrom = e => {
        e.preventDefault()
        const password = e.target.password.value;
        const email = e.target.email.value;

        console.log(password, email);

        login(email, password)
            .then(result => {
                console.log(result.user);
                navigate(form, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handlepopUp = () => {
        googlePopUp()
            .then(result => {
                console.log(result.user);
                navigate(form, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w w-full shadow-2xl bg-base-100">
                    <h1>Login</h1>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <div onClick={handlepopUp} className="form-control mt-6">
                        <button className="btn btn-primary">Google Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;