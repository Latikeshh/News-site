import React from 'react';
import NewsCard from '../components/NewsCard';
import img1 from '../pages/img/images(1).jpeg';
import img2 from '../pages/img/images(2).jpeg';
import img3 from '../pages/img/images(3).jpeg';

const dummyNews = [
    {
        title: "Sample Headline for Category",
        content: "This is a dummy article for the selected news category.",
        image: img1
    },
    {
        title: "Another News Title",
        content: "This is some more placeholder content for the news section.",
        image: img2
    },
    {
        title: "Third Demo News",
        content: "Yet another demo article with fake content to show layout.",
        image: img3
    }
];

const Category = ({ category }) => {
    return (
        <div className="container my-5">
            <h2 className="mb-4">{category} News</h2>
            <div className="row">
                {dummyNews.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <NewsCard title={item.title} content={item.content} image={item.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
