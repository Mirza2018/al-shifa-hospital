import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Main/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Doctors from './pages/Home/Doctors/Doctors.jsx';
import AppointmentDetails from './pages/AppointmentDetails/AppointmentDetails.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Login/Register.jsx';
import PrivetRoute from './pages/PrivetRoute/PrivetRoute.jsx';
import AppointData from './pages/AppointData/AppointData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/appointmentData',
        element: <PrivetRoute><AppointData></AppointData></PrivetRoute>
      },
      {
        path: '/doctors/:id',
        element: <Doctors></Doctors>,
        loader: ({ params }) => fetch(`http://localhost:5000/doctors/${params.id}`)
      }
    ]
  },
  {
    path: "/appointmentdetails/:id",
    element: <PrivetRoute><AppointmentDetails></AppointmentDetails></PrivetRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/appointmentdetails/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
