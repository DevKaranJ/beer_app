import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * @param {Object} props - Contains beer information
 * @returns {JSX.Element} Beer card with image, name, price, rating, and description
**/

const BeerCard = ({ beer }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={beer.image || 'https://via.placeholder.com/150'} 
        alt={beer.name}
        className="p-3"
        style={{ objectFit: 'contain', height: '200px' }}
      />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>
          Price: ${beer.price || 'N/A'}
        </Card.Text>
        <Card.Text>
          Rating: {beer.rating?.average || 'N/A'}
        </Card.Text>
        <Card.Text className="text-muted">
          {beer.description?.substring(0, 100)}
          {beer.description?.length > 100 ? '...' : ''}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BeerCard;