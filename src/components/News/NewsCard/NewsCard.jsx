import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { Rating, RatingStar } from "flowbite-react";
import './NewsCard.css'



const NewsCard = ({ news }) => {
    const { author, title, details, image_url, thumbnail_url, rating, total_view, _id } = news
    return (
        <div className="px-3.5 my-3.5">
            <div className="flex justify-between items-center bg-base-300 px-2.5 py-2">
                <div className="flex items-center gap-1.5">
                    <img className="h-10 w-10 rounded-full" src={author.img} alt="" />
                    <div>
                        <p className="font-bold">{author.name}</p>
                        <p className="text-black/60">{author.published_date}</p>
                    </div>
                </div>

                <div className="flex gap-x-1.5">
                    <FaBookmark className="text-black/35"></FaBookmark>
                    <FaShare className="text-black/35"></FaShare>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-2xl py-1.5">{title}</h1>
                <img src={image_url} alt="" />

                <p className="text-black/50 details-clamp mt-3">
                    {details}
                </p>
                <button className="font-semibold text-orange-400">Read More</button>
            </div>
            <hr className="opacity-[0.3] my-3" />

            <div className="flex justify-between items-center">
                <div >
                    <Rating>
                        <RatingStar />
                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating.number}</p>
                        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                        <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                            {rating.badge}
                        </a>
                    </Rating>
                </div>

                <div className="flex items-center gap-2">
                    <FaEye></FaEye>
                    {total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;