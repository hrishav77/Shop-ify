import React, { useContext} from 'react';
import { FormControl, Input, IconButton ,useMediaQuery} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { CartContext } from './context/Cartcontext';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  const a=useContext(CartContext)
  const navigate = useNavigate();
  const handleSearch = () => {
    // Perform search functionality with searchQuery
    navigate('/search')
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
          w={isSmallScreen ? "80%" : "900px"}
          ml="3"
          value={a.searchQuery}
          onChange={(e) => a.setSearchQuery(e.target.value)}
          size="md"
          border="1px solid black"
        />
        <IconButton m="3" type="submit" colorScheme='yellow' aria-label='Search database' icon={<SearchIcon />}/>   
      </FormControl>
    </form>
  );
};

export default SearchForm;
