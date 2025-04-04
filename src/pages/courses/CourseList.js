import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Rating,
  Pagination,
  useTheme,
  Paper,
  Stack,
  IconButton,
  Tooltip,
  Divider,
  Avatar,
  CardActionArea,
  CardActions,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { 
  Search as SearchIcon, 
  FilterList as FilterListIcon,
  School as SchoolIcon,
  AccessTime as AccessTimeIcon,
  People as PeopleIcon,
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon,
  Clear as ClearIcon,
  Home as HomeIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';

const CourseList = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [level, setLevel] = useState('all');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Dữ liệu mẫu
  const courses = [
    {
      id: 1,
      title: 'Lập trình React từ cơ bản đến nâng cao',
      description: 'Học React từ cơ bản đến nâng cao, bao gồm Hooks, Redux, và các kỹ thuật tối ưu hiệu suất.',
      image: 'https://via.placeholder.com/300x200',
      instructor: 'Nguyễn Văn A',
      instructorAvatar: 'https://mui.com/static/images/avatar/1.jpg',
      rating: 4.5,
      students: 1200,
      price: 599000,
      originalPrice: 799000,
      category: 'web',
      level: 'intermediate',
      duration: '40 giờ',
      lastUpdated: '2 tháng trước',
      bestseller: true,
    },
    {
      id: 2,
      title: 'JavaScript ES6+ và TypeScript',
      description: 'Khám phá các tính năng mới của JavaScript ES6+ và học TypeScript để viết code an toàn hơn.',
      image: 'https://via.placeholder.com/300x200',
      instructor: 'Trần Thị B',
      instructorAvatar: 'https://mui.com/static/images/avatar/2.jpg',
      rating: 4.8,
      students: 850,
      price: 499000,
      originalPrice: 699000,
      category: 'web',
      level: 'advanced',
      duration: '30 giờ',
      lastUpdated: '1 tháng trước',
      bestseller: false,
    },
    {
      id: 3,
      title: 'HTML/CSS và Responsive Design',
      description: 'Học HTML, CSS và các kỹ thuật thiết kế responsive để tạo giao diện web đẹp và tương thích với mọi thiết bị.',
      image: 'https://via.placeholder.com/300x200',
      instructor: 'Lê Văn C',
      instructorAvatar: 'https://mui.com/static/images/avatar/3.jpg',
      rating: 4.2,
      students: 1500,
      price: 399000,
      originalPrice: 599000,
      category: 'web',
      level: 'beginner',
      duration: '25 giờ',
      lastUpdated: '3 tháng trước',
      bestseller: true,
    },
    {
      id: 4,
      title: 'Python cho Data Science',
      description: 'Học Python và các thư viện phổ biến như NumPy, Pandas, Matplotlib để phân tích dữ liệu.',
      image: 'https://via.placeholder.com/300x200',
      instructor: 'Phạm Thị D',
      instructorAvatar: 'https://mui.com/static/images/avatar/4.jpg',
      rating: 4.7,
      students: 950,
      price: 699000,
      originalPrice: 899000,
      category: 'data',
      level: 'intermediate',
      duration: '35 giờ',
      lastUpdated: '2 tháng trước',
      bestseller: false,
    },
    {
      id: 5,
      title: 'Machine Learning với Python',
      description: 'Tìm hiểu về Machine Learning và áp dụng các thuật toán phổ biến để giải quyết các bài toán thực tế.',
      image: 'https://via.placeholder.com/300x200',
      instructor: 'Hoàng Văn E',
      instructorAvatar: 'https://mui.com/static/images/avatar/5.jpg',
      rating: 4.9,
      students: 750,
      price: 799000,
      originalPrice: 999000,
      category: 'data',
      level: 'advanced',
      duration: '45 giờ',
      lastUpdated: '1 tháng trước',
      bestseller: true,
    },
    {
      id: 6,
      title: 'Lập trình Java cho người mới bắt đầu',
      description: 'Học Java từ cơ bản, bao gồm OOP, Collections, và các khái niệm nâng cao.',
      image: 'https://via.placeholder.com/300x200',
      instructor: 'Đỗ Thị F',
      instructorAvatar: 'https://mui.com/static/images/avatar/6.jpg',
      rating: 4.3,
      students: 1100,
      price: 449000,
      originalPrice: 649000,
      category: 'programming',
      level: 'beginner',
      duration: '30 giờ',
      lastUpdated: '4 tháng trước',
      bestseller: false,
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(1);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setCategory('all');
    setLevel('all');
    setPage(1);
  };

  const toggleFavorite = (courseId) => {
    if (favorites.includes(courseId)) {
      setFavorites(favorites.filter(id => id !== courseId));
    } else {
      setFavorites([...favorites, courseId]);
    }
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || course.category === category;
    const matchesLevel = level === 'all' || course.level === level;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const coursesPerPage = 6;
  const indexOfLastCourse = page * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'web':
        return 'Web Development';
      case 'data':
        return 'Data Science';
      case 'programming':
        return 'Programming';
      default:
        return 'All Categories';
    }
  };

  const getLevelLabel = (level) => {
    switch (level) {
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
      default:
        return 'All Levels';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner':
        return theme.palette.success.main;
      case 'intermediate':
        return theme.palette.info.main;
      case 'advanced':
        return theme.palette.warning.main;
      default:
        return theme.palette.grey[500];
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                Học trực tuyến từ các chuyên gia hàng đầu
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
                Phát triển kỹ năng với hơn 1000+ khóa học chất lượng cao
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ 
                    py: 1.5,
                    px: 3,
                    fontSize: '1rem',
                  }}
                >
                  Khám phá khóa học
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    py: 1.5,
                    px: 3,
                    fontSize: '1rem',
                    borderColor: 'white', 
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Xem lộ trình học
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box 
                component="img" 
                src="https://via.placeholder.com/600x400" 
                alt="Learning illustration" 
                sx={{ 
                  width: '100%', 
                  maxWidth: 500, 
                  display: 'block', 
                  margin: '0 auto',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                }} 
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -4, mb: 6, position: 'relative', zIndex: 1 }}>
        {/* Search and Filters */}
        <Paper sx={{ p: 3, mb: 4, borderRadius: 0 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Tìm kiếm khóa học..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton 
                        size="small" 
                        onClick={() => setSearchTerm('')}
                        edge="end"
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button 
                  variant="outlined" 
                  startIcon={<FilterListIcon />}
                  onClick={() => setShowFilters(!showFilters)}
                  sx={{ 
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: `${theme.palette.primary.main}10`,
                    },
                  }}
                >
                  {showFilters ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}
                </Button>
                {(searchTerm || category !== 'all' || level !== 'all') && (
                  <Button 
                    variant="text" 
                    startIcon={<ClearIcon />}
                    onClick={handleClearFilters}
                    sx={{ 
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: theme.palette.error.main,
                      },
                    }}
                  >
                    Xóa bộ lọc
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>

          {showFilters && (
            <Box sx={{ mt: 3 }}>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="category-label">Danh mục</InputLabel>
                    <Select
                      labelId="category-label"
                      value={category}
                      onChange={handleCategoryChange}
                      label="Danh mục"
                    >
                      <MenuItem value="all">Tất cả danh mục</MenuItem>
                      <MenuItem value="web">Web Development</MenuItem>
                      <MenuItem value="data">Data Science</MenuItem>
                      <MenuItem value="programming">Programming</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="level-label">Trình độ</InputLabel>
                    <Select
                      labelId="level-label"
                      value={level}
                      onChange={handleLevelChange}
                      label="Trình độ"
                    >
                      <MenuItem value="all">Tất cả trình độ</MenuItem>
                      <MenuItem value="beginner">Người mới bắt đầu</MenuItem>
                      <MenuItem value="intermediate">Trung cấp</MenuItem>
                      <MenuItem value="advanced">Nâng cao</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>

        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<KeyboardArrowRightIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link 
            component={RouterLink} 
            to="/" 
            color="inherit" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            Trang chủ
          </Link>
          <Typography color="text.primary">Khóa học</Typography>
        </Breadcrumbs>

        {/* Results Summary */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {filteredCourses.length} khóa học {searchTerm ? `cho "${searchTerm}"` : ''} 
            {category !== 'all' ? ` trong danh mục "${getCategoryLabel(category)}"` : ''}
            {level !== 'all' ? ` ở trình độ "${getLevelLabel(level)}"` : ''}
          </Typography>
          <Stack direction="row" spacing={1}>
            {category !== 'all' && (
              <Chip 
                label={getCategoryLabel(category)} 
                onDelete={() => setCategory('all')}
                color="primary"
                variant="outlined"
              />
            )}
            {level !== 'all' && (
              <Chip 
                label={getLevelLabel(level)} 
                onDelete={() => setLevel('all')}
                sx={{ 
                  borderColor: getLevelColor(level),
                  color: getLevelColor(level),
                  '& .MuiChip-deleteIcon': {
                    color: getLevelColor(level),
                  },
                }}
                variant="outlined"
              />
            )}
          </Stack>
        </Box>

        {/* Course Grid */}
        <Grid container spacing={3}>
          {currentCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardActionArea component={RouterLink} to={`/courses/${course.id}`}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={course.image}
                      alt={course.title}
                      sx={{ 
                        objectFit: 'cover',
                      }}
                    />
                    {course.bestseller && (
                      <Box 
                        sx={{ 
                          position: 'absolute', 
                          top: 10, 
                          left: 10,
                          bgcolor: 'warning.main',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        Bestseller
                      </Box>
                    )}
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: 10, 
                        right: 10,
                        zIndex: 1,
                      }}
                    >
                      <Chip 
                        label={getLevelLabel(course.level)} 
                        size="small"
                        sx={{ 
                          backgroundColor: getLevelColor(course.level),
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </CardActionArea>
                  <IconButton 
                    sx={{ 
                      position: 'absolute', 
                      top: 10, 
                      right: 10,
                      bgcolor: 'white',
                      '&:hover': {
                        bgcolor: 'white',
                      },
                      display: { xs: 'none', sm: 'flex' },
                    }}
                    onClick={() => toggleFavorite(course.id)}
                  >
                    {favorites.includes(course.id) ? (
                      <FavoriteIcon sx={{ color: theme.palette.error.main }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      height: '3.6em',
                    }}
                  >
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating 
                      value={course.rating} 
                      precision={0.5} 
                      readOnly 
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      ({course.rating})
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {course.duration}
                    </Typography>
                    <PeopleIcon fontSize="small" sx={{ ml: 2, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {course.students.toLocaleString()} học viên
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      height: '2.8em',
                    }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                  <Box>
                    <Typography 
                      variant="h6" 
                      color="primary" 
                      sx={{ fontWeight: 700 }}
                    >
                      {formatPrice(course.price)}
                    </Typography>
                    {course.originalPrice > course.price && (
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          textDecoration: 'line-through',
                          fontSize: '0.8rem',
                        }}
                      >
                        {formatPrice(course.originalPrice)}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton 
                      size="small"
                      sx={{ 
                        display: { xs: 'flex', sm: 'none' },
                      }}
                      onClick={() => toggleFavorite(course.id)}
                    >
                      {favorites.includes(course.id) ? (
                        <FavoriteIcon sx={{ color: theme.palette.error.main }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                    <Button 
                      variant="contained" 
                      size="small"
                      component={RouterLink}
                      to={`/courses/${course.id}`}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        px: 2,
                      }}
                    >
                      Chi tiết
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Pagination 
              count={totalPages} 
              page={page} 
              onChange={handlePageChange} 
              color="primary"
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CourseList; 