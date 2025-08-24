
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const LoginProvider = () => {
    return (
        <div>
             <h1 className="font-bold">Login With</h1>

        <div className="flex flex-col gap-2.5">
            <button className="flex justify-center rounded-sm font-semibold text-sky-500 items-center py-1.5 px-3 border gap-1.5 border-sky-500">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className="flex justify-center rounded-sm font-semibold items-center py-1.5 px-3 border gap-1.5 ">
                <FaGithub></FaGithub>
                Login with Github
            </button>
        </div>
        </div>
    );
};

export default LoginProvider;