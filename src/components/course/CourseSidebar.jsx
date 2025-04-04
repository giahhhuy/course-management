import React, { useState } from 'react';
import { FaPlay, FaFile, FaCheck, FaLock } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const CourseSidebar = ({ course, currentLesson, progress }) => {
  const [expandedSections, setExpandedSections] = useState([]);
  const navigate = useNavigate();
  const { lessonId } = useParams();

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getLessonIcon = (lesson) => {
    if (lesson.type === 'video') return <FaPlay className="lesson-type-icon" />;
    if (lesson.type === 'document') return <FaFile className="lesson-type-icon" />;
    return null;
  };

  const getLessonStatus = (lesson) => {
    if (progress?.completedLessons?.includes(lesson.id)) {
      return <FaCheck className="lesson-status-icon completed" />;
    }
    if (lesson.isLocked) {
      return <FaLock className="lesson-status-icon locked" />;
    }
    return null;
  };

  const handleLessonClick = (lesson) => {
    if (!lesson.isLocked) {
      navigate(`/course/${course.id}/lesson/${lesson.id}`);
    }
  };

  return (
    <div className="course-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Course Content</h2>
        <div className="course-stats">
          <span>{course?.totalDuration || '0h 0m'} of content</span>
          <span>{course?.totalLessons || 0} lessons</span>
        </div>
      </div>

      <div className="course-sections">
        {course?.sections?.map((section) => (
          <div key={section.id} className="section-item">
            <div 
              className="section-header"
              onClick={() => toggleSection(section.id)}
            >
              <div className="section-info">
                <h3 className="section-title">
                  {section.title}
                </h3>
                <span className="section-duration">
                  {section.duration} • {section.lessons.length} lessons
                </span>
              </div>
              <button className={`expand-button ${expandedSections.includes(section.id) ? 'expanded' : ''}`}>
                ▼
              </button>
            </div>

            {expandedSections.includes(section.id) && (
              <div className="section-lessons">
                {section.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`lesson-item ${lessonId === lesson.id ? 'active' : ''} ${lesson.isLocked ? 'locked' : ''}`}
                    onClick={() => handleLessonClick(lesson)}
                  >
                    <div className="lesson-icon">
                      {getLessonIcon(lesson)}
                    </div>
                    <div className="lesson-details">
                      <h4 className="lesson-title">{lesson.title}</h4>
                      <div className="lesson-meta">
                        <span className="lesson-duration">{lesson.duration}</span>
                        {lesson.preview && <span className="preview-badge">Preview</span>}
                      </div>
                    </div>
                    {getLessonStatus(lesson)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="progress-info">
          <div className="progress-text">
            {progress?.completedLessons?.length || 0} of {course?.totalLessons || 0} complete
          </div>
          <div className="progress-percentage">
            {Math.round((progress?.completedLessons?.length || 0) / (course?.totalLessons || 1) * 100)}%
          </div>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{
              width: `${Math.round((progress?.completedLessons?.length || 0) / (course?.totalLessons || 1) * 100)}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar; 