import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import BeerCard from './BeerCard';
import SearchBar from './SearchBar';

/**
 * @returns {JSX.Element} List of beers with search bar
**/
const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch beers data when component mounts
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/beers/ale');
        setBeers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch beers. Please try again later.');
        setLoading(false);
      }
    };

    fetchBeers();
  }, []);

  // Filter beers based on search term
  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (beer.description || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Alert variant="info">Loading beers...</Alert>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Beer Collection</h1>
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredBeers.map((beer) => (
          <Col key={beer.id}>
            <BeerCard beer={beer} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BeerList;