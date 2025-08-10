// components/NewsCard.js
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ id, title, content, image, category }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${id}`); // redirects to /news/123 or whatever id
  };

  return (
    <div className="card1 h-100 border-0 shadow-sm news-card1 rounded-4 overflow-hidden">
      {/* Image with zoom on hover */}
      <div className="position-relative news-img-wrapper">
        <img src={image} className="card-img-top news-image1" alt={title} />
        <span className="badge1 bg-primary position-absolute top-0 start-0 m-2 text-capitalize">
          {category}
        </span>
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title1 fw-semibold text-truncate" title={title}>
          {title}
        </h5>
        <p className="card-text1 small text-muted">
          {content.length > 90 ? content.slice(0, 90) + "..." : content}
        </p>
        <div className="mt-auto">
          <button
            onClick={handleReadMore}
            className="btn btn-sm btn-outline-primary rounded-pill"
          >
            Read More
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;
