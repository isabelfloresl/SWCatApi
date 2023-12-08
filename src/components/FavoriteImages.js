//FavoriteImages.js
import React from 'react';
import Grid from '@mui/material/Grid';
import ImageCard from './ImageCard';

const FavoriteImages = ({ favorites, onDeleteFavorite }) => {
  const handleDeleteFavorites = () => {
    onDeleteFavorite(favorites);
  };


  const buttonStyle = {
    backgroundColor: 'blueviolet', 
    color: '#fff', 
    padding: '10px 20px', 
    fontSize: '16px', 
    borderRadius: '5px',
    cursor: 'pointer', 
    border: 'none',  
    marginLeft: 'auto', 
    marginTop: '20px'
  };

  return (
    <div>
      <Grid container spacing={2}>
        {favorites.map((imageUrl, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <ImageCard imageUrl={imageUrl} />
          </Grid>
        ))}
      </Grid>
      {favorites.length > 0 && (
        <button onClick={handleDeleteFavorites} style={buttonStyle}>Eliminar Favoritas</button>
      )}
    </div>
  );
};

export default FavoriteImages;

