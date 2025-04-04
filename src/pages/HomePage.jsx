import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUsers, FaPlay } from 'react-icons/fa';

const HomePage = () => {
  // Mock data - replace with real data from your API
  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Doe",
      rating: 4.8,
      ratingCount: 12500,
      students: 50000,
      price: 89.99,
      originalPrice: 199.99,
      thumbnail: "/images/courses/web-dev.jpg",
      tags: ["Web Development", "JavaScript", "React"]
    },
    // Add more courses...
  ];

  const categories = [
    {
      id: 1,
      name: "Development",
      icon: "💻",
      courseCount: 1200
    },
    {
      id: 2,
      name: "Business",
      icon: "💼",
      courseCount: 800
    },
    // Add more categories...
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Learn on your schedule</h1>
          <p>Study any topic, anytime. Choose from thousands of expert-led courses now.</p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="What do you want to learn?" 
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Top Categories</h2>
          <Link to="/categories" className="view-all">View All</Link>
        </div>
        <div className="categories-grid">
          {categories.map(category => (
            <Link to={`/category/${category.id}`} key={category.id} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-name">{category.name}</h3>
              <span className="course-count">{category.courseCount} courses</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <div className="section-header">
          <h2>Featured Courses</h2>
          <Link to="/courses" className="view-all">View All</Link>
        </div>
        <div className="courses-grid">
          {featuredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-thumbnail">
                <img src={course.thumbnail} alt={course.title} />
                <div className="hover-overlay">
                  <button className="preview-button">
                    <FaPlay />
                    Preview
                  </button>
                </div>
              </div>
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>
                <div className="course-rating">
                  <span className="rating-score">{course.rating}</span>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(course.rating) ? 'filled' : ''} 
                      />
                    ))}
                  </div>
                  <span className="rating-count">({course.ratingCount})</span>
                </div>
                <div className="course-meta">
                  <FaUsers />
                  <span>{course.students} students</span>
                </div>
                <div className="course-price">
                  <span className="current-price">${course.price}</span>
                  {course.originalPrice && (
                    <span className="original-price">${course.originalPrice}</span>
                  )}
                </div>
                <div className="course-tags">
                  {course.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Learn from experts</h3>
            <p>Get access to quality content from industry professionals</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Learn at your pace</h3>
            <p>Access course content 24/7 and learn at your convenience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Learn anywhere</h3>
            <p>Study on desktop, mobile, or tablet - your choice</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Get certified</h3>
            <p>Earn certificates upon course completion</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Start teaching with us</h2>
          <p>Share your knowledge with millions of students worldwide</p>
          <Link to="/teach" className="cta-button">Become an instructor</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 