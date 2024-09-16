import Marquee from '@/components/magicui/marquee';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from 'antd';
import realTimeNews from '@/config/latest-news';




const LatestNews = ({ title, description, date, link }) => {
  return (
    <div className="max-w-md bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-4">Posted on: {date}</p>

      <Link
        to={link}
        className=""
      >
        <Button>
          Read the Latest
          <IoIosArrowRoundForward className="size-5" />
        </Button>
      </Link>
    </div>
  );
};

const ScrollingNews = () => {
  return (
    <div className="py-6">
      <h2 className="text-lg md:text-xl text-primary/80 font-bold text-center mb-6">Latest News & Announcements</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex gap-6">
          {realTimeNews.map((news) => (
            <LatestNews key={news.id} {...news} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ScrollingNews;
