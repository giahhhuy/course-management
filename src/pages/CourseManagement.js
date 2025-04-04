import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import CourseList from '../components/courses/CourseList';
import CourseForm from '../components/courses/CourseForm';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleAddCourse = () => {
    setSelectedCourse(null);
    setOpenDialog(true);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  const handleSubmit = (values) => {
    if (selectedCourse) {
      // Cập nhật khóa học
      setCourses(
        courses.map((course) =>
          course.id === selectedCourse.id ? { ...values, id: course.id } : course
        )
      );
    } else {
      // Thêm khóa học mới
      setCourses([...courses, { ...values, id: Date.now() }]);
    }
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <h1>Quản lý khóa học</h1>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddCourse}
          >
            Thêm khóa học
          </Button>
        </Box>

        <CourseList
          courses={courses}
          onEdit={handleEditCourse}
          onDelete={handleDeleteCourse}
        />

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>
            {selectedCourse ? 'Chỉnh sửa khóa học' : 'Thêm khóa học mới'}
          </DialogTitle>
          <DialogContent>
            <CourseForm
              initialValues={selectedCourse}
              onSubmit={handleSubmit}
              onCancel={() => setOpenDialog(false)}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Container>
  );
};

export default CourseManagement; 