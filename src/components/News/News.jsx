import { useState } from "react";
import { useLoaderData } from "react-router";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
    
    const data=useLoaderData()
   
    console.log(data.data);
    if(data.data.length==0){
        return <h1 className="text-2xl flex items-center justify-center min-h-screen">No Data Found</h1>
    }
    return (
        <div>
            {(data.data).map(news=><NewsCard news={news}></NewsCard>)}
        </div>
    );
};

export default News;