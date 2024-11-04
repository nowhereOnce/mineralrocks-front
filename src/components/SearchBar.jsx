import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
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
        />
    );
};

export default SearchBar;