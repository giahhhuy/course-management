import React, { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  LinearProgress,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import {
  Menu as MenuIcon,
  PlayCircle as PlayCircleIcon,
  Assignment as AssignmentIcon,
  Quiz as QuizIcon,
  CheckCircle as CheckCircleIcon,
  Lock as LockIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Chat as ChatIcon,
  Description as DescriptionIcon,
  Download as DownloadIcon,
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

const CourseLearning = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);
  const [tabValue, setTabValue] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(1);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLessonClick = (lessonId) => {
    setCurrentLesson(lessonId);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  // Dữ liệu mẫu
  const course = {
    id: parseInt(id),
    title: 'Lập trình React từ cơ bản đến nâng cao',
    progress: 35,
    sections: [
      {
        id: 1,
        title: 'Giới thiệu về React',
        lessons: [
          { id: 1, title: 'React là gì?', type: 'video', duration: '15:30', completed: true },
          { id: 2, title: 'Cài đặt môi trường phát triển', type: 'video', duration: '20:45', completed: true },
          { id: 3, title: 'Tạo ứng dụng React đầu tiên', type: 'video', duration: '25:15', completed: true },
          { id: 4, title: 'Bài tập: Tạo ứng dụng Todo List', type: 'assignment', duration: '60 phút', completed: false },
        ],
      },
      {
        id: 2,
        title: 'Components và Props',
        lessons: [
          { id: 5, title: 'Tìm hiểu về Components', type: 'video', duration: '18:20', completed: true },
          { id: 6, title: 'Props và cách truyền dữ liệu', type: 'video', duration: '22:10', completed: false },
          { id: 7, title: 'Bài tập: Xây dựng Component Card', type: 'assignment', duration: '45 phút', completed: false },
        ],
      },
      {
        id: 3,
        title: 'State và Lifecycle',
        lessons: [
          { id: 8, title: 'State trong React', type: 'video', duration: '25:40', completed: false },
          { id: 9, title: 'Lifecycle Methods', type: 'video', duration: '30:15', completed: false },
          { id: 10, title: 'Bài tập: Ứng dụng Counter', type: 'assignment', duration: '50 phút', completed: false },
        ],
      },
    ],
    currentLesson: {
      id: 6,
      title: 'Props và cách truyền dữ liệu',
      type: 'video',
      content: `
        <h2>Props và cách truyền dữ liệu trong React</h2>
        <p>Props (Properties) là cách để truyền dữ liệu từ component cha xuống component con trong React. Props là read-only, nghĩa là component con không thể thay đổi giá trị của props.</p>
        
        <h3>1. Truyền Props</h3>
        <pre><code>
          // Component cha
          function ParentComponent() {
            return (
              <ChildComponent name="John" age={30} />
            );
          }
          
          // Component con
          function ChildComponent(props) {
            return (
              <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
              </div>
            );
          }
        </code></pre>
        
        <h3>2. Destructuring Props</h3>
        <p>Bạn có thể sử dụng destructuring để lấy giá trị từ props:</p>
        <pre><code>
          function ChildComponent({ name, age }) {
            return (
              <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
              </div>
            );
          }
        </code></pre>
        
        <h3>3. Default Props</h3>
        <p>Bạn có thể đặt giá trị mặc định cho props:</p>
        <pre><code>
          ChildComponent.defaultProps = {
            name: 'Guest',
            age: 0
          };
        </code></pre>
        
        <h3>4. Props với Children</h3>
        <p>Bạn có thể truyền nội dung giữa các thẻ mở và đóng của component:</p>
        <pre><code>
          function ParentComponent() {
            return (
              <ChildComponent>
                <p>This is a child element</p>
              </ChildComponent>
            );
          }
          
          function ChildComponent({ children }) {
            return (
              <div>
                {children}
              </div>
            );
          }
        </code></pre>
      `,
      resources: [
        { id: 1, title: 'Slide bài giảng', type: 'pdf', url: '#' },
        { id: 2, title: 'Mã nguồn mẫu', type: 'zip', url: '#' },
      ],
    },
  };

  // Tìm bài học hiện tại
  const currentLessonData = course.currentLesson;

  // Tìm bài học trước và sau
  const allLessons = course.sections.flatMap(section => section.lessons);
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLesson);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Drawer cho danh sách bài học */}
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6" noWrap component="div">
            {course.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={course.progress}
              sx={{ flexGrow: 1, mr: 1, height: 8, borderRadius: 4 }}
            />
            <Typography variant="body2" color="text.secondary">
              {course.progress}%
            </Typography>
          </Box>
        </Box>
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
                <ListItem
                  key={lesson.id}
                  button
                  selected={currentLesson === lesson.id}
                  onClick={() => handleLessonClick(lesson.id)}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>
                    {lesson.completed ? (
                      <CheckCircleIcon color="success" />
                    ) : lesson.id <= currentLesson ? (
                      lesson.type === 'video' ? (
                        <PlayCircleIcon color="primary" />
                      ) : lesson.type === 'assignment' ? (
                        <AssignmentIcon color="primary" />
                      ) : (
                        <QuizIcon color="primary" />
                      )
                    ) : (
                      <LockIcon color="disabled" />
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
      </Drawer>

      {/* Nội dung chính */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 300px)` },
          ml: { sm: '300px' },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            {currentLessonData.title}
          </Typography>
        </Box>

        {/* Nội dung bài học */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 3 }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Nội dung" />
                  <Tab label="Tài liệu" />
                  <Tab label="Thảo luận" />
                </Tabs>
              </Box>

              {/* Tab Nội dung */}
              <TabPanel value={tabValue} index={0}>
                <div dangerouslySetInnerHTML={{ __html: currentLessonData.content }} />
              </TabPanel>

              {/* Tab Tài liệu */}
              <TabPanel value={tabValue} index={1}>
                <List>
                  {currentLessonData.resources.map((resource) => (
                    <ListItem key={resource.id}>
                      <ListItemIcon>
                        <DescriptionIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={resource.title} />
                      <IconButton>
                        <DownloadIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </TabPanel>

              {/* Tab Thảo luận */}
              <TabPanel value={tabValue} index={2}>
                <Typography variant="body1">
                  Phần thảo luận sẽ được thêm vào sau.
                </Typography>
              </TabPanel>
            </Paper>

            {/* Điều hướng bài học */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                disabled={!prevLesson}
                component={prevLesson ? RouterLink : 'button'}
                to={prevLesson ? `/courses/${course.id}/learn/${prevLesson.id}` : '#'}
              >
                {prevLesson ? prevLesson.title : 'Không có bài trước'}
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                disabled={!nextLesson}
                component={nextLesson ? RouterLink : 'button'}
                to={nextLesson ? `/courses/${course.id}/learn/${nextLesson.id}` : '#'}
              >
                {nextLesson ? nextLesson.title : 'Hoàn thành khóa học'}
              </Button>
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Tài liệu bổ sung
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <DescriptionIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Tài liệu tham khảo React" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DescriptionIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Cheat sheet React Hooks" />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="outlined">
                  Xem tất cả tài liệu
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Cần giúp đỡ?
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Nếu bạn có câu hỏi về bài học này, hãy tham gia thảo luận với các học viên khác.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<ChatIcon />}
                >
                  Tham gia thảo luận
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CourseLearning; 