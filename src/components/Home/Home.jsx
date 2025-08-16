import { useEffect, useState } from "react";


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
        </aside>
       </main>
    );
};

export default Home;