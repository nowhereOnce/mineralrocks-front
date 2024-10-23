import React from 'react';
import useFetch from '../hooks/useFetch';
import TableComponent from '../components/TableComponent';
import Header from '../components/Header';
import FormButton from '../components/FormButton';

const HomePage = () => {
    const { data, loading, error } = useFetch();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Header></Header>        
            <div className='table-form-button'>
                <div className='form-button'>
                    <FormButton></FormButton>
                </div>
                <TableComponent data={data} />
            </div>
        </div>
    );
};

export default HomePage;
