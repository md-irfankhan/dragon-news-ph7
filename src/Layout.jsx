import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <nav className='max-w-[1250px] mx-auto'>
                <Nav></Nav>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;