import React from 'react';
import useFetch from '../hooks/useFetch';
import TableComponent from '../components/TableComponent';
import Header from '../components/Header';

const HomePage = () => {
    const { data, loading, error } = useFetch();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {/* <h1>Data Table</h1> */}
            <Header></Header>
            <div className='table-component'>
                <TableComponent data={data} />
            </div>
        </div>
    );
};

export default HomePage;
