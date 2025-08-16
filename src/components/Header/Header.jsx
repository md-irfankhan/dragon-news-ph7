import moment from 'moment';
import logo from '../../assets/logo.png'
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center text-center gap-y-4 mt-5'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p className='opacity-[0.7]'>Journalism Without Fear and Favour</p>
                    <p className='my-2 opacity-[0.7]'><span className='font-bold'>{moment().format('dddd')} </span>{moment().format('MMMM D YYYY')}</p>
                </div>
            </div>
            <div className='flex gap-1.5 max-w-[1250px] mx-auto bg-base-300 p-3 mt-2'>
                <button className='text-white bg-pink-700 py-2 px-3'>
                    Latest
                </button>
                <Marquee>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia praesentium pariatur, alias nisi tempore placeat voluptate exercitationem quam labore iusto? Deserunt eos expedita nobis numquam harum officia, tenetur aliquid.
                    </p>
                </Marquee>

            </div>

        </>
    );
};

export default Header;