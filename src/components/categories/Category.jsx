import React from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';
import PizzaIcon from '@mui/icons-material/LocalPizza';
import BurgerIcon from '@mui/icons-material/Fastfood';
import SandwichIcon from '@mui/icons-material/Fastfood';
import PastaIcon from '@mui/icons-material/Fastfood';

const categories = [
  { name: 'Pizza', icon: <PizzaIcon /> },
  { name: 'Burger', icon: <BurgerIcon /> },
  { name: 'Sandwich', icon: <SandwichIcon /> },
  { name: 'Pasta', icon: <PastaIcon /> },
  { name: 'Pizza', icon: <PizzaIcon /> },
  { name: 'Burger', icon: <BurgerIcon /> },
  { name: 'Sandwich', icon: <SandwichIcon /> },
  { name: 'Pasta', icon: <PastaIcon /> },
];

const Category = () => {
  return (
    <Container maxWidth="md" mt={4}>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'left' , marginTop: '2rem'}}>
        {categories.map((category, index) => (
          <Grid item key={index}>
            <Paper elevation={3} sx={{ padding: '1rem', textAlign: 'center', borderRadius: '8px', width: '120px' }}>
              {category.icon}
              <Typography variant="h6">{category.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Category;
