import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  Stack,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Send as SendIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.grey[50]})`,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h5" 
              color="primary" 
              gutterBottom 
              sx={{ fontWeight: 700, mb: 2 }}
            >
              E-Learning
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
              Nền tảng học trực tuyến hàng đầu, cung cấp các khóa học chất lượng cao
              từ các chuyên gia hàng đầu trong lĩnh vực.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton 
                aria-label="Facebook" 
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': { 
                    backgroundColor: `${theme.palette.primary.main}15`,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                aria-label="Twitter" 
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': { 
                    backgroundColor: `${theme.palette.primary.main}15`,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                aria-label="Instagram" 
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': { 
                    backgroundColor: `${theme.palette.primary.main}15`,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                aria-label="LinkedIn" 
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': { 
                    backgroundColor: `${theme.palette.primary.main}15`,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                aria-label="YouTube" 
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': { 
                    backgroundColor: `${theme.palette.primary.main}15`,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom 
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Liên kết nhanh
            </Typography>
            <Stack spacing={1}>
              <Link 
                component={RouterLink} 
                to="/courses" 
                color="text.secondary" 
                sx={{ 
                  display: 'inline-block', 
                  mb: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Khóa học
              </Link>
              <Link 
                component={RouterLink} 
                to="/dashboard" 
                color="text.secondary" 
                sx={{ 
                  display: 'inline-block', 
                  mb: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Dashboard
              </Link>
              <Link 
                component={RouterLink} 
                to="/profile" 
                color="text.secondary" 
                sx={{ 
                  display: 'inline-block', 
                  mb: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Hồ sơ
              </Link>
              <Link 
                component={RouterLink} 
                to="/login" 
                color="text.secondary" 
                sx={{ 
                  display: 'inline-block', 
                  mb: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Đăng nhập
              </Link>
              <Link 
                component={RouterLink} 
                to="/register" 
                color="text.secondary" 
                sx={{ 
                  display: 'inline-block', 
                  mb: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Đăng ký
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom 
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Liên hệ
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  support@elearning.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  +84 123 456 789
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                </Typography>
              </Box>
            </Stack>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom 
              sx={{ fontWeight: 600, mt: 3, mb: 2 }}
            >
              Đăng ký nhận tin
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Email của bạn"
                sx={{ 
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px 0 0 8px',
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  borderRadius: '0 8px 8px 0',
                  px: 2,
                }}
              >
                <SendIcon fontSize="small" />
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ 
            '& a': {
              color: theme.palette.primary.main,
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
        >
          {'Copyright © '}
          <Link color="inherit" component={RouterLink} to="/">
            E-Learning
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 