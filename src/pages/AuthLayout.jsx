import { Outlet } from 'react-router';
import Nav from '../components/Nav/Nav';
const AuthLayout = () => {
    return (
        <div>
            <Nav></Nav>

            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;