import React from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';
import { Link  } from 'react-router-dom';
import PizzaImage from '/g-1.jpg';
import BurgerImage from '/s-img-2.jpg';
// import BurgerIcon from '@mui/icons-material/Fastfood';
// import SandwichIcon from '@mui/icons-material/Fastfood';
// import PastaIcon from '@mui/icons-material/Fastfood';

const categories = [
  { name: 'Pizza', image: PizzaImage, path: '/g-1.jpg' },
  { name: 'Burger', image: BurgerImage, path: '/s-img-2.jpg'  },
  { name: 'Sandwich', image: PizzaImage, path:'/g-1.jpg'  },
  { name: 'Pasta', image: PizzaImage, path:'/g-1.jpg'  },
  { name: 'Pizza', image:PizzaImage, path: '/g-1.jpg'  },
  { name: 'Burger', image:PizzaImage, path: '/g-1.jpg' },
  { name: 'Sandwich', image: PizzaImage, path: '/g-1.jpg'  },
  { name: 'Pasta', image: PizzaImage, path: '/g-1.jpg' },
];

const Category = () => {
  return (
    <Container maxWidth="md" mt={4}>
      <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem' }}>Categories</Typography>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'left'}}>
        {categories.map((category, index) => (
          <Grid item key={index}>
            <Paper elevation={3} sx={{ padding: '1rem', textAlign: 'center', borderRadius: '8px', width: '120px' }}>
              <Link to={category.name} color="inherit" underline="none">
              <img src={category.image} alt={category.name} style={{ width: '50px', height: '50px' }} />
                <Typography variant="h6">{category.name}</Typography>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Category;
