import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
  Avatar,
  Chip,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  Timeline as TimelineIcon,
  EmojiEvents as EmojiEventsIcon,
  PlayCircle as PlayCircleIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  AccessTime as AccessTimeIcon,
  Person as PersonIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  CalendarToday as CalendarTodayIcon,
} from '@mui/icons-material';

const Dashboard = ({ user }) => {
  const theme = useTheme();
  
  // Dữ liệu mẫu
  const enrolledCourses = [
    {
      id: 1,
      title: 'Lập trình React từ cơ bản đến nâng cao',
      progress: 65,
      nextLesson: 'Bài 5: React Hooks',
      instructor: 'Nguyễn Văn A',
      instructorAvatar: 'https://mui.com/static/images/avatar/1.jpg',
      image: 'https://via.placeholder.com/300x200',
      lastAccessed: '2 giờ trước',
    },
    {
      id: 2,
      title: 'JavaScript ES6+ và TypeScript',
      progress: 30,
      nextLesson: 'Bài 3: Arrow Functions',
      instructor: 'Trần Thị B',
      instructorAvatar: 'https://mui.com/static/images/avatar/2.jpg',
      image: 'https://via.placeholder.com/300x200',
      lastAccessed: '1 ngày trước',
    },
    {
      id: 3,
      title: 'HTML/CSS và Responsive Design',
      progress: 90,
      nextLesson: 'Bài cuối: Dự án thực tế',
      instructor: 'Lê Văn C',
      instructorAvatar: 'https://mui.com/static/images/avatar/3.jpg',
      image: 'https://via.placeholder.com/300x200',
      lastAccessed: '3 ngày trước',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'lesson',
      title: 'Hoàn thành bài học "React Hooks"',
      course: 'Lập trình React từ cơ bản đến nâng cao',
      time: '2 giờ trước',
      icon: <PlayCircleIcon color="primary" />,
    },
    {
      id: 2,
      type: 'assignment',
      title: 'Nộp bài tập "Component Lifecycle"',
      course: 'Lập trình React từ cơ bản đến nâng cao',
      time: '1 ngày trước',
      icon: <AssignmentIcon color="secondary" />,
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Đạt chứng chỉ "JavaScript Fundamentals"',
      course: 'JavaScript ES6+ và TypeScript',
      time: '3 ngày trước',
      icon: <EmojiEventsIcon sx={{ color: theme.palette.warning.main }} />,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Học viên chăm chỉ',
      description: 'Hoàn thành 10 bài học liên tiếp',
      icon: <EmojiEventsIcon sx={{ color: theme.palette.primary.main }} />,
    },
    {
      id: 2,
      title: 'Học viên xuất sắc',
      description: 'Đạt điểm cao trong 5 bài kiểm tra',
      icon: <CheckCircleIcon sx={{ color: theme.palette.success.main }} />,
    },
  ];

  const stats = [
    {
      id: 1,
      title: 'Khóa học đang học',
      value: '3',
      icon: <SchoolIcon sx={{ color: theme.palette.primary.main }} />,
      color: theme.palette.primary.light,
    },
    {
      id: 2,
      title: 'Bài học đã hoàn thành',
      value: '24',
      icon: <CheckCircleIcon sx={{ color: theme.palette.success.main }} />,
      color: theme.palette.success.light,
    },
    {
      id: 3,
      title: 'Chứng chỉ đã đạt',
      value: '2',
      icon: <EmojiEventsIcon sx={{ color: theme.palette.warning.main }} />,
      color: theme.palette.warning.light,
    },
    {
      id: 4,
      title: 'Thời gian học tập',
      value: '48h',
      icon: <AccessTimeIcon sx={{ color: theme.palette.info.main }} />,
      color: theme.palette.info.light,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Thông tin người dùng */}
      <Paper 
        sx={{ 
          p: 3, 
          mb: 3, 
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          borderRadius: 3,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Xin chào, John Doe!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
              Chào mừng bạn quay trở lại. Hãy tiếp tục hành trình học tập của bạn.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<PlayCircleIcon />}
                sx={{ 
                  backgroundColor: 'white', 
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Tiếp tục học
              </Button>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: 'white', 
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Xem tất cả khóa học
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box 
              component="img" 
              src="https://via.placeholder.com/300x200" 
              alt="Learning illustration" 
              sx={{ 
                width: '100%', 
                maxWidth: 300, 
                display: 'block', 
                margin: '0 auto',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
              }} 
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Thống kê */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.id}>
            <Paper 
              sx={{ 
                p: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                height: 140,
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 8px 24px ${stat.color}40`,
                },
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {stat.title}
                </Typography>
                <Box 
                  sx={{ 
                    backgroundColor: `${stat.color}30`,
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 700, mt: 1 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                <TrendingUpIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5, color: theme.palette.success.main }} />
                Tăng 12% so với tháng trước
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Khóa học đang học */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Khóa học đang học
              </Typography>
              <Button 
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}10`,
                  },
                }}
              >
                Xem tất cả
              </Button>
            </Box>
            <Grid container spacing={3}>
              {enrolledCourses.map((course) => (
                <Grid item xs={12} key={course.id}>
                  <Card 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' },
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: { xs: '100%', sm: 200 }, 
                        height: { xs: 140, sm: 'auto' },
                        backgroundImage: `url(${course.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }} 
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          {course.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Avatar 
                            src={course.instructorAvatar} 
                            sx={{ width: 24, height: 24, mr: 1 }} 
                          />
                          <Typography variant="body2" color="text.secondary">
                            {course.instructor}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            Truy cập lần cuối: {course.lastAccessed}
                          </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            Tiến độ: {course.progress}%
                          </Typography>
                          <LinearProgress 
                            variant="determinate" 
                            value={course.progress} 
                            sx={{ 
                              height: 8, 
                              borderRadius: 4,
                              backgroundColor: `${theme.palette.primary.main}20`,
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Bài học tiếp theo: {course.nextLesson}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button 
                          variant="contained" 
                          size="small"
                          component={RouterLink}
                          to={`/courses/${course.id}/learn`}
                          sx={{ 
                            borderRadius: 2,
                            px: 2,
                          }}
                        >
                          Tiếp tục học
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Hoạt động gần đây và thành tích */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Hoạt động gần đây
            </Typography>
            <List>
              {recentActivities.map((activity) => (
                <React.Fragment key={activity.id}>
                  <ListItem 
                    sx={{ 
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: `${theme.palette.primary.main}05`,
                        borderRadius: 2,
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {activity.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {activity.title}
                        </Typography>
                      }
                      secondary={
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            {activity.course}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                            <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary', fontSize: 14 }} />
                            <Typography variant="caption" color="text.secondary">
                              {activity.time}
                            </Typography>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  {activity.id !== recentActivities.length && <Divider variant="inset" component="li" />}
                </React.Fragment>
              ))}
            </List>
            <Button 
              fullWidth 
              variant="outlined" 
              sx={{ 
                mt: 2,
                borderRadius: 2,
              }}
            >
              Xem tất cả hoạt động
            </Button>
          </Paper>

          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Thành tích
            </Typography>
            <Grid container spacing={2}>
              {achievements.map((achievement) => (
                <Grid item xs={12} key={achievement.id}>
                  <Card 
                    sx={{ 
                      borderRadius: 3,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box 
                        sx={{ 
                          backgroundColor: `${theme.palette.primary.main}15`,
                          borderRadius: '50%',
                          p: 1.5,
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {achievement.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {achievement.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {achievement.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button 
              fullWidth 
              variant="outlined" 
              sx={{ 
                mt: 2,
                borderRadius: 2,
              }}
            >
              Xem tất cả thành tích
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 