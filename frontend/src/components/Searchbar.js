import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { FormControl, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform search functionality with searchQuery
    
    console.log('Search query:', searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display="flex" alignItems="center">
        <Input
          type="text"
          placeholder="Search"
          w="5xl"
          ml="6rem"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="md"
        />
        <Link to="/search">
        <IconButton ml={2} type="submit" colorScheme='teal' aria-label='Search database' icon={<SearchIcon />}/>
        </Link>
        
   
      </FormControl>
    </form>
  );
};

export default SearchForm;
