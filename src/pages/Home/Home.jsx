import React from 'react';
import Slider from './Slider/Slider';
import CategoryDoctors from './CategoryDoctors/CategoryDoctors';
import AppointmentDetails from '../AppointmentDetails/AppointmentDetails';

const Home = () => {
    return (
        <div>
             <Slider></Slider>
            <CategoryDoctors></CategoryDoctors>
        </div>
    );
};

export default Home;