import { useState } from "react";
import { useLoaderData } from "react-router";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
    
    const data=useLoaderData()
   
    console.log(data.data);
    
    return (
        <div>
            {(data.data).map(news=><NewsCard news={news}></NewsCard>)}
        </div>
    );
};

export default News;