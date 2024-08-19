import React from 'react';
import Slider from './Slider/Slider';
import CategoryDoctors from './CategoryDoctors/CategoryDoctors';
import AppointmentDetails from '../AppointmentDetails/AppointmentDetails';
import AllDocTors from '../alldDoctors/AllDocTors';

const Home = () => {
    return (
        <div>
             <Slider></Slider>

            <CategoryDoctors></CategoryDoctors>
        </div>
    );
};

export default Home;