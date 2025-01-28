import React from 'react';
import DataTable from 'react-data-table-component';
import Actions from './Actions'; // Importar el componente
import ExpandedComponent from './ExpandedComponent'; // Importar el componente

const TableComponent = ({ data, reload, isAuthenticated }) => {
    const columns = [
        {
            name: 'Nombre Roca',
            selector: row => row.rock_name,
            sortable: true,
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
            name: 'Image',
            cell: row => row.picture ? (
                <img src={row.picture} alt={row.rock_name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
            ) : (
                <span>Sin muestra</span>
            ),
            maxwidth: '60px',
        },
        {
            name: 'Acciones',
            cell: row => <Actions row={row} reload={reload}/>,

        },
    ];

    //New list without the "Acciones" column
    const columns_without_Acciones = columns.filter(item => item.name !== 'Acciones');


    return (
        <DataTable
            title="Muestras de rocas"
            columns={isAuthenticated ? columns : columns_without_Acciones}
            data={data}
            pagination
            highlightOnHover
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            expandOnRowClicked
            expandableRowsHideExpander
        />
    );
};

export default TableComponent;

