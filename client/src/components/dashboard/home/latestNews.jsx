import latestNews from '@/config/latest-news';
import { Link } from 'react-router-dom';
import React from 'react';
import Marquee from '@/components/magicui/marquee';

const firstRow = latestNews.slice(0, latestNews.length / 2);
const secondRow = latestNews.slice(latestNews.length / 2);

const Line = ({ title, link }) => {
  return (
    <div className='flex items-center justify-center'>
      <img src="/img/new.png" className='h-5' alt="img" />
      <Link to={link}>
        <span>{title}</span>
      </Link>
    </div>
  );
}

const LatestNews = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s] bg-gray-50">
        {firstRow.map((news) => (
          <Line key={news.id} {...news} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] bg-gray-50">
        {secondRow.map((news) => (
          <Line key={news.id} {...news} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default LatestNews;
