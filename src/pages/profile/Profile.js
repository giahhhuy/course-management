import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Card,
  CardContent,
  CardActions,
  Chip,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  Star as StarIcon,
  Lock as LockIcon,
  PhotoCamera,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

// Component TabPanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Profile = () => {
  const { currentUser, updateUserProfile } = useAuth();
  const [tabValue, setTabValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: currentUser?.displayName || '',
    email: currentUser?.email || '',
    phone: '',
    location: '',
    bio: '',
    avatar: currentUser?.photoURL || 'https://mui.com/static/images/avatar/1.jpg',
  });
  const [formData, setFormData] = useState({ ...userData });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setFormData({ ...userData });
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');

    try {
      await updateUserProfile({
        displayName: formData.name,
        photoURL: formData.avatar,
      });
      setUserData({ ...formData });
      setIsEditing(false);
      setMessage('Cập nhật thông tin thành công!');
    } catch (error) {
      setMessage('Cập nhật thông tin thất bại: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Dữ liệu mẫu
  const enrolledCourses = [
    { id: 1, title: 'Lập trình React từ cơ bản đến nâng cao', progress: 35, lastAccessed: '2023-04-01' },
    { id: 2, title: 'JavaScript ES6+ và TypeScript', progress: 80, lastAccessed: '2023-03-28' },
    { id: 3, title: 'Node.js và Express.js', progress: 15, lastAccessed: '2023-03-25' },
  ];

  const completedCourses = [
    { id: 4, title: 'HTML & CSS cơ bản', completedDate: '2023-02-15', grade: 'A' },
    { id: 5, title: 'JavaScript cơ bản', completedDate: '2023-03-10', grade: 'A-' },
  ];

  const certificates = [
    { id: 1, title: 'HTML & CSS cơ bản', issueDate: '2023-02-15', issuer: 'E-Learning' },
    { id: 2, title: 'JavaScript cơ bản', issueDate: '2023-03-10', issuer: 'E-Learning' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  src={userData.avatar}
                  alt={userData.name}
                  sx={{ width: 150, height: 150, mb: 2 }}
                />
                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<PhotoCamera />}
                  sx={{ position: 'absolute', bottom: 0, right: 0 }}
                >
                  Thay đổi ảnh
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => {
                      // Handle file upload here
                      // For now, just set a placeholder URL
                      setUserData({ ...userData, avatar: 'https://via.placeholder.com/150' });
                    }}
                  />
                </Button>
              </Box>
              <Typography variant="h5" gutterBottom>
                {userData.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {userData.bio}
              </Typography>
              <Button
                variant="outlined"
                startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
                onClick={isEditing ? handleSave : handleEdit}
                sx={{ mr: 1 }}
              >
                {isEditing ? 'Lưu' : 'Chỉnh sửa'}
              </Button>
              {isEditing && (
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<CancelIcon />}
                  onClick={handleCancel}
                >
                  Hủy
                </Button>
              )}
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="Thông tin cá nhân" />
                  <Tab label="Khóa học" />
                  <Tab label="Chứng chỉ" />
                  <Tab label="Bảo mật" />
                </Tabs>
              </Box>

              {/* Tab Thông tin cá nhân */}
              <TabPanel value={tabValue} index={0}>
                {isEditing ? (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Họ và tên"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Số điện thoại"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Địa chỉ"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Giới thiệu"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        margin="normal"
                        multiline
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary="Họ và tên" secondary={userData.name} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText primary="Email" secondary={userData.email} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText primary="Số điện thoại" secondary={userData.phone} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationIcon />
                      </ListItemIcon>
                      <ListItemText primary="Địa chỉ" secondary={userData.location} />
                    </ListItem>
                  </List>
                )}
              </TabPanel>

              {/* Tab Khóa học */}
              <TabPanel value={tabValue} index={1}>
                <Typography variant="h6" gutterBottom>
                  Khóa học đang học
                </Typography>
                <List>
                  {enrolledCourses.map((course) => (
                    <ListItem key={course.id}>
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={course.title}
                        secondary={`Tiến độ: ${course.progress}% | Truy cập lần cuối: ${course.lastAccessed}`}
                      />
                      <ListItemSecondaryAction>
                        <Button variant="outlined" size="small">
                          Tiếp tục học
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                  Khóa học đã hoàn thành
                </Typography>
                <List>
                  {completedCourses.map((course) => (
                    <ListItem key={course.id}>
                      <ListItemIcon>
                        <AssignmentIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary={course.title}
                        secondary={`Hoàn thành: ${course.completedDate} | Điểm: ${course.grade}`}
                      />
                      <ListItemSecondaryAction>
                        <Chip
                          icon={<StarIcon />}
                          label={`Điểm: ${course.grade}`}
                          color="primary"
                          variant="outlined"
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </TabPanel>

              {/* Tab Chứng chỉ */}
              <TabPanel value={tabValue} index={2}>
                <Grid container spacing={2}>
                  {certificates.map((cert) => (
                    <Grid item xs={12} sm={6} key={cert.id}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {cert.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Cấp bởi: {cert.issuer}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Ngày cấp: {cert.issueDate}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            Xem chứng chỉ
                          </Button>
                          <Button size="small" color="primary">
                            Tải xuống
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              {/* Tab Bảo mật */}
              <TabPanel value={tabValue} index={3}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LockIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Đổi mật khẩu"
                      secondary="Cập nhật mật khẩu của bạn"
                    />
                    <ListItemSecondaryAction>
                      <Button variant="outlined" size="small">
                        Đổi mật khẩu
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Xác thực hai yếu tố"
                      secondary="Bảo vệ tài khoản của bạn bằng xác thực hai yếu tố"
                    />
                    <ListItemSecondaryAction>
                      <Button variant="outlined" size="small">
                        Thiết lập
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </TabPanel>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile; 