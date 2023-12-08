//ImageCard.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ImageCard = ({ imageUrl, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(imageUrl);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Cat Image"
        height="140"
        image={imageUrl}
      />
      <CardActions>
        <IconButton onClick={handleFavoriteToggle}>
          <FavoriteIcon color={isFavorite ? 'error' : 'default'} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
