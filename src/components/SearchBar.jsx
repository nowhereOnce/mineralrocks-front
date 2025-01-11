import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchTerm, setSearchTerm, isAuthenticated}) => {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <TextField
            label="Buscar"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            sx={!isAuthenticated ? { right: '-200px' } : {right: '0px'}}
        />
    );
};

export default SearchBar;