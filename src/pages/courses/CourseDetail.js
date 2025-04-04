import React, { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Avatar,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import {
  PlayCircle as PlayCircleIcon,
  Assignment as AssignmentIcon,
  Quiz as QuizIcon,
  AccessTime as AccessTimeIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
} from '@mui/icons-material';

// Component TabPanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`course-tabpanel-${index}`}
      aria-labelledby={`course-tab-${index}`}
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

const CourseDetail = () => {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Dữ liệu mẫu
  const course = {
    id: parseInt(id),
    title: 'Lập trình React từ cơ bản đến nâng cao',
    description: 'Khóa học này sẽ giúp bạn học React từ cơ bản đến nâng cao. Bạn sẽ học cách xây dựng ứng dụng web hiện đại với React, bao gồm các khái niệm như Components, Props, State, Hooks, Context API, Redux, và nhiều kỹ thuật tối ưu hiệu suất khác.',
    image: 'https://via.placeholder.com/1200x400',
    instructor: {
      name: 'Nguyễn Văn A',
      avatar: 'https://via.placeholder.com/100',
      title: 'Senior Frontend Developer',
      bio: 'Có hơn 5 năm kinh nghiệm trong lĩnh vực phát triển web, chuyên về React và các công nghệ frontend hiện đại.',
    },
    rating: 4.5,
    reviewCount: 120,
    students: 1200,
    price: 599000,
    originalPrice: 999000,
    category: 'web',
    level: 'intermediate',
    duration: '40 giờ',
    lastUpdated: 'Tháng 3, 2023',
    language: 'Tiếng Việt',
    certificate: true,
    lifetimeAccess: true,
    mobileAccess: true,
    assignments: true,
    sections: [
      {
        id: 1,
        title: 'Giới thiệu về React',
        lessons: [
          { id: 1, title: 'React là gì?', type: 'video', duration: '15:30' },
          { id: 2, title: 'Cài đặt môi trường phát triển', type: 'video', duration: '20:45' },
          { id: 3, title: 'Tạo ứng dụng React đầu tiên', type: 'video', duration: '25:15' },
          { id: 4, title: 'Bài tập: Tạo ứng dụng Todo List', type: 'assignment', duration: '60 phút' },
        ],
      },
      {
        id: 2,
        title: 'Components và Props',
        lessons: [
          { id: 5, title: 'Tìm hiểu về Components', type: 'video', duration: '18:20' },
          { id: 6, title: 'Props và cách truyền dữ liệu', type: 'video', duration: '22:10' },
          { id: 7, title: 'Bài tập: Xây dựng Component Card', type: 'assignment', duration: '45 phút' },
        ],
      },
      {
        id: 3,
        title: 'State và Lifecycle',
        lessons: [
          { id: 8, title: 'State trong React', type: 'video', duration: '25:40' },
          { id: 9, title: 'Lifecycle Methods', type: 'video', duration: '30:15' },
          { id: 10, title: 'Bài tập: Ứng dụng Counter', type: 'assignment', duration: '50 phút' },
        ],
      },
      {
        id: 4,
        title: 'React Hooks',
        lessons: [
          { id: 11, title: 'useState Hook', type: 'video', duration: '28:30' },
          { id: 12, title: 'useEffect Hook', type: 'video', duration: '32:45' },
          { id: 13, title: 'useContext và useReducer', type: 'video', duration: '35:20' },
          { id: 14, title: 'Bài tập: Chuyển đổi Class Components sang Hooks', type: 'assignment', duration: '70 phút' },
        ],
      },
      {
        id: 5,
        title: 'Redux và State Management',
        lessons: [
          { id: 15, title: 'Giới thiệu về Redux', type: 'video', duration: '30:10' },
          { id: 16, title: 'Actions và Reducers', type: 'video', duration: '35:25' },
          { id: 17, title: 'Redux Thunk và Middleware', type: 'video', duration: '40:15' },
          { id: 18, title: 'Bài tập: Xây dựng ứng dụng Shopping Cart', type: 'assignment', duration: '90 phút' },
        ],
      },
    ],
    requirements: [
      'Kiến thức cơ bản về HTML, CSS và JavaScript',
      'Máy tính có cài đặt Node.js',
      'Editor code như VS Code',
      'Kinh nghiệm lập trình web cơ bản',
    ],
    whatYouWillLearn: [
      'Xây dựng ứng dụng web hiện đại với React',
      'Quản lý state với Redux và Context API',
      'Tối ưu hiệu suất ứng dụng React',
      'Áp dụng các kỹ thuật và best practices',
      'Xây dựng ứng dụng thực tế từ đầu đến cuối',
    ],
    reviews: [
      {
        id: 1,
        user: 'Trần Văn B',
        avatar: 'https://via.placeholder.com/50',
        rating: 5,
        date: '2 tuần trước',
        comment: 'Khóa học rất hay và bổ ích. Giảng viên giải thích rõ ràng, dễ hiểu. Tôi đã học được nhiều kiến thức mới và áp dụng được vào công việc.',
      },
      {
        id: 2,
        user: 'Lê Thị C',
        avatar: 'https://via.placeholder.com/50',
        rating: 4,
        date: '1 tháng trước',
        comment: 'Nội dung khóa học rất đầy đủ và chi tiết. Tuy nhiên, một số phần nâng cao hơi khó hiểu với người mới bắt đầu.',
      },
      {
        id: 3,
        user: 'Phạm Văn D',
        avatar: 'https://via.placeholder.com/50',
        rating: 5,
        date: '2 tháng trước',
        comment: 'Tôi đã hoàn thành khóa học và có thể tự tin xây dựng ứng dụng React. Cảm ơn giảng viên và nền tảng rất nhiều!',
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {course.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            {course.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={course.rating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({course.rating}) • {course.reviewCount} đánh giá
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src={course.instructor.avatar} sx={{ mr: 1 }} />
            <Box>
              <Typography variant="body1">{course.instructor.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {course.instructor.title}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            <Chip icon={<AccessTimeIcon />} label={course.duration} />
            <Chip icon={<PeopleIcon />} label={`${course.students.toLocaleString()} học viên`} />
            <Chip icon={<SchoolIcon />} label={course.level === 'beginner' ? 'Người mới bắt đầu' : course.level === 'intermediate' ? 'Trung cấp' : 'Nâng cao'} />
            <Chip icon={<CheckCircleIcon />} label={course.language} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                {course.price.toLocaleString()}đ
              </Typography>
              {course.originalPrice && (
                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                  {course.originalPrice.toLocaleString()}đ
                </Typography>
              )}
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
            >
              Đăng ký khóa học
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
            >
              Thêm vào giỏ hàng
            </Button>
            <Divider sx={{ my: 2 }} />
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Truy cập trọn đời" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Truy cập trên thiết bị di động" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Chứng chỉ hoàn thành" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Bài tập thực hành" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Tabs */}
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ width: '100%' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Nội dung khóa học" />
            <Tab label="Bạn sẽ học được gì" />
            <Tab label="Yêu cầu" />
            <Tab label="Đánh giá" />
          </Tabs>

          {/* Nội dung khóa học */}
          <TabPanel value={tabValue} index={0}>
            <Typography variant="h6" gutterBottom>
              Nội dung khóa học
            </Typography>
            <List>
              {course.sections.map((section) => (
                <React.Fragment key={section.id}>
                  <ListItem>
                    <ListItemText
                      primary={section.title}
                      primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
                    />
                  </ListItem>
                  {section.lessons.map((lesson) => (
                    <ListItem key={lesson.id} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {lesson.type === 'video' ? (
                          <PlayCircleIcon color="primary" />
                        ) : lesson.type === 'assignment' ? (
                          <AssignmentIcon color="primary" />
                        ) : (
                          <QuizIcon color="primary" />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={lesson.title}
                        secondary={lesson.duration}
                      />
                    </ListItem>
                  ))}
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </TabPanel>

          {/* Bạn sẽ học được gì */}
          <TabPanel value={tabValue} index={1}>
            <Typography variant="h6" gutterBottom>
              Bạn sẽ học được gì
            </Typography>
            <Grid container spacing={2}>
              {course.whatYouWillLearn.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card variant="outlined">
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                      <Typography variant="body1">{item}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Yêu cầu */}
          <TabPanel value={tabValue} index={2}>
            <Typography variant="h6" gutterBottom>
              Yêu cầu
            </Typography>
            <List>
              {course.requirements.map((requirement, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={requirement} />
                </ListItem>
              ))}
            </List>
          </TabPanel>

          {/* Đánh giá */}
          <TabPanel value={tabValue} index={3}>
            <Typography variant="h6" gutterBottom>
              Đánh giá từ học viên
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography variant="h3" sx={{ mr: 2 }}>
                {course.rating}
              </Typography>
              <Box>
                <Rating value={course.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary">
                  Dựa trên {course.reviewCount} đánh giá
                </Typography>
              </Box>
            </Box>
            <List>
              {course.reviews.map((review) => (
                <React.Fragment key={review.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Avatar src={review.avatar} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="subtitle1" component="span">
                            {review.user}
                          </Typography>
                          <Rating value={review.rating} readOnly size="small" sx={{ ml: 1 }} />
                        </Box>
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                            sx={{ display: 'block', mb: 1 }}
                          >
                            {review.comment}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            {review.date}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
};

export default CourseDetail; 