import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleMenuClose();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <SchoolIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          E-Learning Platform
        </Typography>

        {user ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" component={RouterLink} to="/courses">
                Khóa học
              </Button>
              <Button color="inherit" component={RouterLink} to="/dashboard">
                Bảng điều khiển
              </Button>
              <IconButton color="inherit" onClick={handleNotificationOpen}>
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={handleMenuOpen} color="inherit">
                <Avatar sx={{ width: 32, height: 32 }}>
                  {user.name ? user.name.charAt(0) : 'U'}
                </Avatar>
              </IconButton>
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={RouterLink} to="/profile" onClick={handleMenuClose}>
                Hồ sơ
              </MenuItem>
              <MenuItem component={RouterLink} to="/my-courses" onClick={handleMenuClose}>
                Khóa học của tôi
              </MenuItem>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>

            <Menu
              anchorEl={notificationAnchorEl}
              open={Boolean(notificationAnchorEl)}
              onClose={handleNotificationClose}
            >
              <MenuItem onClick={handleNotificationClose}>
                Bạn có bài tập mới trong khóa học React
              </MenuItem>
              <MenuItem onClick={handleNotificationClose}>
                Khóa học JavaScript đã được cập nhật
              </MenuItem>
              <MenuItem onClick={handleNotificationClose}>
                Bạn đã hoàn thành 80% khóa học HTML/CSS
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <Button color="inherit" component={RouterLink} to="/login">
              Đăng nhập
            </Button>
            <Button color="inherit" component={RouterLink} to="/register">
              Đăng ký
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 