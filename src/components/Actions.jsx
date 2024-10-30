import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Actions = ({ row, onUpdate, onDelete }) => {
    const handleUpdate = () => {
        console.log(`Updating...`)
        onUpdate(row); // Lógica para actualizar el registro
    };

    const handleDelete = () => {
        console.log(`Deleting...`)
        onDelete(row); // Lógica para eliminar el registro
    };

    return (
        <div>
            <IconButton
                color="primary"
                aria-label="Actualizar registro"
                onClick={handleUpdate}
            >
                <EditIcon />
            </IconButton>
            <IconButton
                color="error"
                aria-label="Eliminar registro"
                onClick={handleDelete}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default Actions;
