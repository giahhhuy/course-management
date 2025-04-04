import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const CourseList = ({ courses, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Danh sách khóa học
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tên khóa học</TableCell>
            <TableCell>Mô tả</TableCell>
            <TableCell>Thời lượng</TableCell>
            <TableCell>Giảng viên</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>{course.duration} giờ</TableCell>
              <TableCell>{course.instructor}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(course)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(course.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseList; 