import FindUs from "./FindUs/FindUs";
import LoginProvider from "./LoginProvider/LoginProvider";


const RightNav = () => {
    return (
        <div>
            <LoginProvider></LoginProvider>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNav;