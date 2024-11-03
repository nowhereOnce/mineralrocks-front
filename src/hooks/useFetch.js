import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const reload = async () => {
        setLoading(true);
        try {
            const result = await fetchData();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        reload();
    }, []);

    return { data, loading, error, reload };
};

export default useFetch;
