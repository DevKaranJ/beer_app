import React from 'react';
import { Form } from 'react-bootstrap';

/**
 * @param {Object} props - Contains search term and search change handler
 * @returns {JSX.Element} - Search bar for filtering beers 
**/
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Search beers..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default SearchBar;