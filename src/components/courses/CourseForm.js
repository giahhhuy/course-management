import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from '@mui/material';

const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng nhập tên khóa học'),
  description: Yup.string().required('Vui lòng nhập mô tả'),
  duration: Yup.number()
    .required('Vui lòng nhập thời lượng')
    .positive('Thời lượng phải là số dương'),
  instructor: Yup.string().required('Vui lòng nhập tên giảng viên'),
});

const CourseForm = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {initialValues ? 'Chỉnh sửa khóa học' : 'Thêm khóa học mới'}
      </Typography>
      <Formik
        initialValues={initialValues || {
          name: '',
          description: '',
          duration: '',
          instructor: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                name="name"
                label="Tên khóa học"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                name="description"
                label="Mô tả"
                multiline
                rows={4}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
              <TextField
                name="duration"
                label="Thời lượng (giờ)"
                type="number"
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.duration && Boolean(errors.duration)}
                helperText={touched.duration && errors.duration}
              />
              <TextField
                name="instructor"
                label="Giảng viên"
                value={values.instructor}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.instructor && Boolean(errors.instructor)}
                helperText={touched.instructor && errors.instructor}
              />
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button variant="outlined" onClick={onCancel}>
                  Hủy
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  {initialValues ? 'Cập nhật' : 'Thêm mới'}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default CourseForm; 