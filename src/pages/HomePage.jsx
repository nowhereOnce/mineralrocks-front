import React from 'react';
import useFetch from '../hooks/useFetch';
import TableComponent from '../components/TableComponent';
import Header from '../components/Header';
import FormButton from '../components/FormButton';

const HomePage = () => {
    const { data, loading, error, reload } = useFetch();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Header></Header>        
            <div className='table-form-button'>
                <div className='form-button'>
                    <FormButton reload={reload}></FormButton>
                </div>
                <TableComponent data={data} reload={reload} />
            </div>
        </div>
    );
};

export default HomePage;
