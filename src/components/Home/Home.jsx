import { useEffect, useState } from "react";
import RightNav from "../RightNav/RightNav";
import News from "../News/News";
import { Outlet } from "react-router";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";

const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    console.log(categories);

    return (
        <>
        <Header></Header>
        <nav className='max-w-[1250px] mx-auto'>
            <Nav></Nav>
        </nav>
            <main className="grid lg:grid-cols-12  max-w-[1250px] mx-auto">
                <aside className="col-span-3">
                    <h1 className="font-bold">All Category</h1>
                    <div className="flex flex-wrap gap-2 lg:flex-col gap-y-2">
                        {
                            categories.map(cate => <button className="py-1.5 px-3" key={cate.category_id}>{cate.category_name}</button>)
                        }
                    </div>
                </aside>
                <section className="col-span-6">
                    <h1 className="font-bold">Dragon News Home</h1>
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </>
    );
};

export default Home;