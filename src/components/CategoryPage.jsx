// CategoryPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <Container>
      <Typography variant="h4" sx={{textAlign: 'center'}}>{categoryName}s</Typography>
      {/* Add your category-specific content here */}
      <Button variant="contained" color="primary">Add Item</Button>
    </Container>
  );
};

export default CategoryPage;
