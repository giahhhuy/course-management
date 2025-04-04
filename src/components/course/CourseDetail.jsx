import React, { useState } from 'react';
import { FaStar, FaPlay, FaGlobe, FaCertificate, FaMobile, FaInfinity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CourseDetail = ({ course }) => {
  const [selectedSection, setSelectedSection] = useState('overview');
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Handle course enrollment or purchase
    navigate(`/checkout/course/${course.id}`);
  };

  return (
    <div className="course-detail">
      <div className="course-header">
        <div className="course-preview">
          <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
          <button className="preview-overlay">
            <FaPlay className="play-icon" />
            <span>Preview this course</span>
          </button>
        </div>

        <div className="course-info">
          <h1 className="course-title">{course.title}</h1>
          <p className="course-description">{course.description}</p>

          <div className="course-meta">
            <div className="rating">
              <span className="rating-score">{course.rating}</span>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(course.rating) ? 'filled' : ''} />
                ))}
              </div>
              <span className="rating-count">({course.ratingCount} ratings)</span>
            </div>
            <span className="enrollment-count">{course.enrollments} students</span>
          </div>

          <div className="instructor-info">
            <p>Created by <a href={`/instructor/${course.instructor.id}`}>{course.instructor.name}</a></p>
            <div className="instructor-meta">
              <span>Last updated {course.lastUpdated}</span>
              <span><FaGlobe /> {course.language}</span>
              <span>{course.subtitles && 'Subtitles available'}</span>
            </div>
          </div>
        </div>

        <div className="course-purchase">
          <div className="purchase-card">
            <div className="price">
              <span className="current-price">${course.price}</span>
              {course.originalPrice && (
                <span className="original-price">${course.originalPrice}</span>
              )}
            </div>

            <button className="btn-enroll" onClick={handleEnroll}>
              {course.isPurchased ? 'Go to Course' : 'Enroll Now'}
            </button>

            <button className="btn-wishlist">Add to Wishlist</button>

            <div className="guarantee">30-Day Money-Back Guarantee</div>

            <div className="course-includes">
              <h3>This course includes:</h3>
              <ul>
                <li><FaPlay /> {course.videoDuration} hours on-demand video</li>
                <li><FaCertificate /> Certificate of completion</li>
                <li><FaMobile /> Access on mobile and TV</li>
                <li><FaInfinity /> Full lifetime access</li>
              </ul>
            </div>

            <div className="share-gift">
              <button className="btn-share">Share</button>
              <button className="btn-gift">Gift this course</button>
            </div>
          </div>
        </div>
      </div>

      <div className="course-content">
        <div className="content-nav">
          <button 
            className={`nav-item ${selectedSection === 'overview' ? 'active' : ''}`}
            onClick={() => setSelectedSection('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-item ${selectedSection === 'curriculum' ? 'active' : ''}`}
            onClick={() => setSelectedSection('curriculum')}
          >
            Curriculum
          </button>
          <button 
            className={`nav-item ${selectedSection === 'reviews' ? 'active' : ''}`}
            onClick={() => setSelectedSection('reviews')}
          >
            Reviews
          </button>
          <button 
            className={`nav-item ${selectedSection === 'instructor' ? 'active' : ''}`}
            onClick={() => setSelectedSection('instructor')}
          >
            Instructor
          </button>
        </div>

        <div className="content-section">
          {selectedSection === 'overview' && (
            <div className="course-overview">
              <div className="what-youll-learn">
                <h2>What you'll learn</h2>
                <ul className="learning-objectives">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div className="requirements">
                <h2>Requirements</h2>
                <ul>
                  {course.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="detailed-description">
                <h2>Description</h2>
                <div dangerouslySetInnerHTML={{ __html: course.detailedDescription }} />
              </div>

              <div className="target-audience">
                <h2>Who this course is for:</h2>
                <ul>
                  {course.targetAudience.map((audience, index) => (
                    <li key={index}>{audience}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Add other section content components here */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 