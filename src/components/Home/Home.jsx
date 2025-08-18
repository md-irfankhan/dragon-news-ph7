import { useEffect, useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Home = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('/api/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
       <main className="grid grid-cols-12 max-w-[1250px] mx-auto">
        <aside className="col-span-3">
            <h1 className="font-bold">All Category</h1>
           <div className="flex flex-col gap-y-2">
              {
                categories.map(cate=><button key={cate.id}>{cate.name}</button>)
              }
           </div>
        </aside>
        <section className="col-span-6">
        <h1 className="font-bold">Dragon News Home</h1>
        </section>
        <aside className="col-span-3">
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
        </aside>
       </main>
    );
};

export default Home;