// components/NewsCard.js
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ _id, title, content, image, category, publishedAt }) => {
  const navigate = useNavigate();

  // Ensure image path is correct
  const imageUrl = image
    ? (image.startsWith('http') ? image : `http://localhost:8000/${image}`)
    : 'placeholder.jpg';

  const handleReadMore = () => {
    navigate(`/news/${_id}`);
  };

  return (
    <div className="card1 h-100 border-0 shadow-sm news-card1 rounded-4 overflow-hidden">
      {/* Image */}
      <div className="position-relative news-img-wrapper">
        <img src={imageUrl} className="card-img-top news-image1" alt={title} />
        {category && (
          <span className="badge1 bg-primary position-absolute top-0 start-0 m-2 text-capitalize">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title1 fw-semibold text-truncate" title={title}>
          {title}
        </h5>
        <p className="card-text1 small text-muted">
          {content
            ? content.length > 90
              ? content.slice(0, 90) + '...'
              : content
            : 'No content available'}
        </p>
        {publishedAt && (
          <p className="text-unmuted small mb-2">
            📅 {new Date(publishedAt).toLocaleDateString('en-GB')}
          </p>
        )}
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
