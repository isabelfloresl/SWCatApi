//App.js
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import FavoriteImages from './components/FavoriteImages';
import ImageCard from './components/ImageCard';
import './styles.css'


const App = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);


  const fetchRandomImages = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=9');
      const data = await response.json();
      const imageUrls = data.map((image) => image.url);
      setImages(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFavoriteToggle = (imageUrl) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(imageUrl)
        ? prevFavorites.filter((url) => url !== imageUrl)
        : [...prevFavorites, imageUrl]
    );
  };

  const handleDeleteFavorite = (selectedFavorites) => {
    const updatedFavorites = favorites.filter(
      (favorite) => !selectedFavorites.includes(favorite)
    );
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    fetchRandomImages();
  }, []);

  return (
    <Container>
      <h1>Selecciona tus gatos favoritos!</h1>
      <Grid container spacing={2}>
        {images.map((imageUrl, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <ImageCard imageUrl={imageUrl} onFavoriteToggle={handleFavoriteToggle} />
          </Grid>
        ))}
      </Grid>
      <h2>Mis favoritos</h2>
      <FavoriteImages favorites={favorites} onDeleteFavorite={handleDeleteFavorite} />
    </Container>
  );
};


export default App;


