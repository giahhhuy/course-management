import React, { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Badge,
  Stack,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  ExitToApp as LogoutIcon,
  Login as LoginIcon,
  HowToReg as RegisterIcon,
  AdminPanelSettings as AdminIcon,
  Notifications as NotificationsIcon,
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Giả sử người dùng đã đăng nhập
  const isAuthenticated = true;
  const isAdmin = true;
  const user = {
    name: 'John Doe',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
    notifications: 3,
    cartItems: 2,
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    // Xử lý đăng xuất
    handleCloseUserMenu();
    navigate('/login');
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Khóa học', icon: <SchoolIcon />, path: '/courses' },
    ...(isAdmin ? [{ text: 'Quản lý khóa học', icon: <AdminIcon />, path: '/admin/courses' }] : []),
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const renderMobileMenu = () => (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          background: 'linear-gradient(to bottom, #f5f5f5, #ffffff)',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
          E-Learning
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleMobileMenuToggle}
            selected={isActive(item.path)}
            sx={{
              borderRadius: '0 20px 20px 0',
              mr: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: `${theme.palette.primary.light}15`,
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.light}25`,
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
                '& .MuiListItemText-primary': {
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {isAuthenticated ? (
        <List>
          <ListItem
            button
            component={RouterLink}
            to="/profile"
            onClick={handleMobileMenuToggle}
            selected={isActive('/profile')}
            sx={{
              borderRadius: '0 20px 20px 0',
              mr: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: `${theme.palette.primary.light}15`,
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.light}25`,
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
                '& .MuiListItemText-primary': {
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}><PersonIcon /></ListItemIcon>
            <ListItemText primary="Hồ sơ" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon sx={{ minWidth: 40 }}><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem
            button
            component={RouterLink}
            to="/login"
            onClick={handleMobileMenuToggle}
            selected={isActive('/login')}
            sx={{
              borderRadius: '0 20px 20px 0',
              mr: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: `${theme.palette.primary.light}15`,
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.light}25`,
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
                '& .MuiListItemText-primary': {
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}><LoginIcon /></ListItemIcon>
            <ListItemText primary="Đăng nhập" />
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to="/register"
            onClick={handleMobileMenuToggle}
            selected={isActive('/register')}
            sx={{
              borderRadius: '0 20px 20px 0',
              mr: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: `${theme.palette.primary.light}15`,
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.light}25`,
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
                '& .MuiListItemText-primary': {
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}><RegisterIcon /></ListItemIcon>
            <ListItemText primary="Đăng ký" />
          </ListItem>
        </List>
      )}
    </Drawer>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: theme.palette.text.primary }}
              onClick={handleMobileMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: theme.palette.primary.main,
              textDecoration: 'none',
              letterSpacing: '.1rem',
            }}
          >
            E-Learning
          </Typography>

          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    mx: 1, 
                    color: isActive(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
                    fontWeight: isActive(item.path) ? 600 : 400,
                    position: 'relative',
                    '&:after': isActive(item.path) ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: '2px',
                    } : {},
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isAuthenticated ? (
              <>
                <Stack direction="row" spacing={2} sx={{ mr: 2 }}>
                  <IconButton color="inherit" sx={{ color: theme.palette.text.primary }}>
                    <Badge badgeContent={user.notifications} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit" sx={{ color: theme.palette.text.primary }}>
                    <Badge badgeContent={user.cartItems} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Stack>
                <Tooltip title="Cài đặt tài khoản">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar 
                      alt={user.name} 
                      src={user.avatar} 
                      sx={{ 
                        width: 40, 
                        height: 40,
                        border: `2px solid ${theme.palette.primary.light}`,
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem component={RouterLink} to="/profile" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Hồ sơ</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Đăng xuất</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Stack direction="row" spacing={2}>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  sx={{ 
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: `${theme.palette.primary.main}10`,
                    },
                  }}
                >
                  Đăng nhập
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  sx={{ 
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Đăng ký
                </Button>
              </Stack>
            )}
          </Box>
        </Toolbar>
      </Container>
      {renderMobileMenu()}
    </AppBar>
  );
};

export default Navbar; 