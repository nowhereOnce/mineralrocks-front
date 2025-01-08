import React from 'react';
import useFetch from '../hooks/useFetch';
import TableComponent from '../components/TableComponent';
import Header from '../components/Header';
import FormButton from '../components/FormButton';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import LoginButton from '../components/LoginButton';

const HomePage = () => {
    //Fetch data from the API
    const { data, loading, error, reload } = useFetch();
    //State to control the search term
    const [searchTerm, setSearchTerm] = useState('');
    //State to control the authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const filteredData = data.filter(item =>
        item.rock_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header></Header>
            {!isAuthenticated && <LoginButton setIsAuthenticated={setIsAuthenticated} />}        
            <div className='table-form-button'>
                <div className='form-button'>
                    <FormButton reload={reload}></FormButton>
                </div>
                <div className='search-bar'>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <TableComponent data={filteredData} reload={reload} />
            </div>
        </div>
    );
};

export default HomePage;
