import axios from 'axios';

const API_URL = 'http://localhost:8000'; // URL con la API

export const fetchData = async () => {
    const response = await axios.get(`${API_URL}/samples/`); //hace una solicitud al API para la tabla de "samples"
    return response.data;
};
