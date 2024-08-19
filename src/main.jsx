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
import AllDocTors from './pages/alldDoctors/AllDocTors.jsx';

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
        path: '/doctors',
        element: <AllDocTors></AllDocTors>,
        loader: () => fetch(`https://al-shifa-hospital-server-1.onrender.com/doctors`)
      },
      {
        path: '/appointmentData',
        element: <PrivetRoute><AppointData></AppointData></PrivetRoute>
      },
      {
        path: '/doctors/:id',
        element: <Doctors></Doctors>,
        loader: ({ params }) => fetch(`https://al-shifa-hospital-server-1.onrender.com/doctors/${params.id}`)
      }
    ]
  },
  {
    path: "/appointmentdetails/:id",
    element: <PrivetRoute><AppointmentDetails></AppointmentDetails></PrivetRoute>,
    loader: ({ params }) => fetch(`https://al-shifa-hospital-server-1.onrender.com/appointmentdetails/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
