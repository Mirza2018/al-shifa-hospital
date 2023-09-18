import { Outlet } from 'react-router-dom';
import Naver from '../Home/Navber/Naver';
const Main = () => {
    return (
        <div>
            <Naver></Naver>         
            <Outlet></Outlet>
        </div>
    );
};

export default Main;