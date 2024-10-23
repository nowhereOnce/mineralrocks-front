import React from 'react';
import DataTable from 'react-data-table-component';

const TableComponent = ({ data }) => {
    const columns = [
        {
            name: 'Nombre Roca',
            selector: row => row.rock_name,
            sortable: true,
        },
        
        {
            name: 'Corte',
            selector: row => row.cut ? "Si": "No",
            maxwidth: '120px',
        },
        {
            name: 'Sección Fina',
            selector: row => row.thin_section ? "Si": "No",
            maxwidth: '120px',
        },
        {
            name: 'Localidad',
            selector: row => row.location_name,
            sortable: true,
        },
        {
            name: 'País',
            selector: row => row.location_country,
            sortable: true,
        },
        {
            name: 'Image',  // Nombre de la columna
            cell: row => <img src={row.picture} alt={row.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />,  // Renderizar la imagen
        },
        // Agregar más columnas según sea necesario
    ];

    return (
        <DataTable
            title="Muestras de rocas"
            columns={columns}
            data={data}
            pagination
            highlightOnHover
        />
    );
};

export default TableComponent;
