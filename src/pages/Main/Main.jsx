import { Outlet } from 'react-router-dom';
import Naver from '../Home/Navber/Naver';
import Footer from '../footer/Footer';
const Main = () => {
    return (
        <div>
            <Naver></Naver>         
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;