import React, { useContext} from 'react';
import { FormControl, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { CartContext } from './context/Cartcontext';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const a=useContext(CartContext)
  const navigate = useNavigate();
  const handleSearch = () => {
    // Perform search functionality with searchQuery
    console.log('Search query:', a.searchQuery);
    navigate('/search');
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
          value={a.searchQuery}
          onChange={(e) => a.setSearchQuery(e.target.value)}
          size="md"
        />
        <IconButton ml={2} type="submit" colorScheme='teal' aria-label='Search database' icon={<SearchIcon />}/>   
      </FormControl>
    </form>
  );
};

export default SearchForm;
