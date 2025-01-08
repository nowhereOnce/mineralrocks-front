import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomDialog from './CustomDialog';
import axios from 'axios';

const Actions = ({ row, reload }) => {

    //State to control the dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = async (formJson) => {
        try {
            const token = localStorage.getItem('token');
            console.log(`Updating...${row.uid}`)
            const response = await axios.put(`http://localhost:8000/samples/${row.uid}`, formJson, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log("Actualización exitosa:", response.data);
            await reload(); // Recargar datos
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };


    const handleDeleteClick = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(`Deleting...${row.uid}`);
            const response = await axios.delete(`http://localhost:8000/samples/${row.uid}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log("Eliminación exitosa:", response.data);
            await reload(); // Recargar datos
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <div>
            <IconButton
                color="primary"
                aria-label="Actualizar registro"
                onClick={handleClickOpen}
            >
                <EditIcon />
            </IconButton>

            <CustomDialog open={open} handleClose={handleClose} handleUpdate={handleUpdate} defaultValues={true} row={row} />

            <IconButton
                color="error"
                aria-label="Eliminar registro"
                onClick={handleDeleteClick}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default Actions;
