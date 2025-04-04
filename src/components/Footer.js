import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
} from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              E-Learning Platform
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nền tảng học trực tuyến hàng đầu, cung cấp các khóa học chất lượng cao
              từ các chuyên gia trong lĩnh vực.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Liên kết nhanh
            </Typography>
            <Link component={RouterLink} to="/courses" color="inherit" display="block" sx={{ mb: 1 }}>
              Khóa học
            </Link>
            <Link component={RouterLink} to="/about" color="inherit" display="block" sx={{ mb: 1 }}>
              Giới thiệu
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
              Liên hệ
            </Link>
            <Link component={RouterLink} to="/faq" color="inherit" display="block">
              Câu hỏi thường gặp
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Liên hệ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: support@elearning.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Điện thoại: +84 123 456 789
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} E-Learning Platform. Tất cả quyền được bảo lưu.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 